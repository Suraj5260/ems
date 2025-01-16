import conf from "../conf.js"
import { Client, Account, ID } from "appwrite"

export class AuthService {

  client = new Client
  account;

  constructor() {

    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.account = new Account(this.client)
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        this.Login(email, password)

      }
      else {
        return userAccount;
      }
    } catch (error) {
      throw error;

    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password)
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return this.account.get()
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: error", error);
    }

    return null
  }

  async logOut() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
    }
  }

}

const authService = new AuthService()

export default authService