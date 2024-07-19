import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ name, number, email, role }) {

                // Ensure phone number starts with '+' and does not exceed fifteen digits
                const formattedNumber = number.startsWith('+91') ? number : `+91${number}`;
        
                // Check if the phone number length is valid
                if (formattedNumber.length > 16) { // + and 15 digits
                    throw new Error("Phone number must start with a '+' and can have a maximum of fifteen digits.");
                }
                number = formattedNumber;
        
        try {
            // Check if the user already exists before creating a new account
            const existingUser = await this.account.createPhoneToken(ID.unique(), number);

            if (existingUser) {
                throw new Error("User already exists");
            }

            // Create a new user account without a password
            const userAccount = await this.account.create(ID.unique(), email, '', name);

            // Store role information in user preferences
            await this.account.updatePrefs(userAccount.$id, { role, number });

            return true;
        } catch (error) {
            console.error("Error during account creation:", error.message);
            throw error;
        }
    }

    async login({ number }) {
        const formattedNumber = number.startsWith('+91') ? number : `+91${number}`;
        
        // Check if the phone number length is valid
        if (formattedNumber.length > 16) { // + and 15 digits
            throw new Error("Phone number must start with a '+' and can have a maximum of fifteen digits.");
        }
  
         number = formattedNumber;
        try {
            if (!number) {
                throw new Error("Phone number is required.");
            }

            // Create a phone token using the Appwrite SDK
            const token = await this.account.createPhoneToken(ID.unique(), number);

            // Extract userId from the token response
            console.log(token)
            const userId = token.userId;

            return { userId };
        } catch (error) {
            console.error("Error during login:", error.message);
            throw error;
        }
    }

    async takeOtp({ userId, secret }) {
        try {
            if (!secret) {
                throw new Error("OTP secret is required.");
            }

            // Create a session using the OTP secret
            return await this.otpLoginSession({ userId, secret });
        } catch (error) {
            console.error("Error during OTP submission:", error.message);
            throw error;
        }
    }

    async otpLoginSession({ userId, secret }) {
        try {
            // Create a session using the Appwrite SDK
            return await this.account.createSession(userId, secret);
        } catch (error) {
            console.error("Error during session creation:", error.message);
            throw error;
        }
    }

    async updateAddress({ userId, address }) {
        try {
            // Update user preferences with the address
            return await this.account.updatePrefs(userId, { address });
        } catch (error) {
            console.error("Error during address update:", error.message);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Services :: getCurrentUser error:", error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Services :: logout error:", error);
        }
    }
}

const authService = new AuthService();
export default authService;
