import conf from "../conf/conf"
import { Client,Account,ID } from "appwrite";

export class AuthService{
    client = new Client()
    account

    constructor(){
        this.client
          .setEndpoint(conf.appwriteURL)
          .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({name,number,email,state,city,address,password}){
        try{
            const userAccount = await this.account.create(ID.unique(),name,number,state,city,email,address,password)
            if(userAccount){
                return true;
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({number,password}){
        try{
            return await this.account.createEmailPasswordSession(number,password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
         console.log("Appwrite Services :: getCurrentUser error : " ,error)
        }
        return null;
     }

     async logout(){
        try{
             return await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite Services :: logout error : " ,error)
        }
     }
}

const authService = new AuthService()

export default authService;