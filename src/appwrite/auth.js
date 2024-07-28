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

    async createAccount({ name, number, password, email }) {
        const formattedNumber = number.startsWith('+91') ?  number : `+91${number}`;

        // Check if the phone number length is valid
        if (formattedNumber.length > 13) { // + and 10 digits
            throw new Error("Phone number must start with a '+' and can have a maximum of TEN digits.");
        }

        try {
            // Create a new user account without a password
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // Store phone number and role in user preferences
            await this.account.createEmailPasswordSession(email, password);
            await this.account.updatePhone(formattedNumber, password);
            await this.account.deleteSessions();
            console.log(userAccount);
            // await this.account.updatePrefs(userAccount.$id, { number: formattedNumber, role });
            return userAccount;
        } catch (error) {
            console.error("Error during account creation:", error.message);
            throw error;
        }
    }
    async login({email}) {
        // const formattedNumber = number.startsWith('+91') ? number : `+91${number}`;
        
        // // Check if the phone number length is valid
        // if (formattedNumber.length > 13) { // + and 10 digits
        //     throw new Error("Phone number must start with a '+' and can have a maximum of TEN digits.");
        // }
        // number = formattedNumber;

        try {
            if (!email) {
                throw new Error("Email is required.");
            }

            // Generate phone token for login
            const token = await this.account.createEmailToken(ID.unique(),email);
            return token;
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
           const user =  await this.account.createSession(userId, secret);
           if(user) {
            return true;
           }
           else {
            throw error;
           }
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
