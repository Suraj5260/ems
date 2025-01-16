import conf from "../conf.js"
import { Client, Account, ID, Databases, Storage, Query } from "appwrite"

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
  }

  async createTask({ title, description, status, assignedTo, featuredDocument, dueDate, assignedBy, taskId }) {
    try {
      taskId = ID.unique(); // Assign unique ID to taskId
      return await this.databases.createDocument(
        conf.appWriteDatabaseId, // databaseId
        conf.appWriteCollectionId, // collectionId
        taskId, // documentId
        {
          title,
          description,
          status,
          assignedTo,
          featuredDocument,
          dueDate,
          assignedBy
        }, // data
      );
    } catch (error) {
      console.log("Appwrite Service :: createTask :: error", error);
    }
  }

  async updateTask(taskId, { title, description, status, assignedTo, featuredDocument, dueDate }) {

    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId, // databaseId
        conf.appWriteCollectionId, // collectionId
        taskId, // documentId
        {
          title,
          description,
          status,
          assignedTo,
          featuredDocument,
          dueDate
        }, // data
      );
    } catch (error) {
      console.log("Appwrite Service :: updateTask :: error", error);
    }
  }

  async deleteTask(taskId) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId, // databaseId
        conf.appWriteCollectionId, // collectionId
        taskId // documentId
      )
      return true
    } catch (error) {
      console.log("Appwrite Service :: deleteTask :: error", error);
      return false
    }

  }

  async getTask({ taskId }) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId, // databaseId
        conf.appWriteCollectionId, // collectionId
        taskId // documentId
      )
    } catch (error) {
      console.log("Appwrite Service :: getTask :: error", error);
      return false
    }
  }

  async listTasks(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId, // databaseId
        conf.appWriteCollectionId, // collectionId
        queries // filters
      )
    } catch (error) {
      console.log("Appwrite Service :: listTasks :: error", error);
      return false
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId, // bucketId
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Appwrite Service :: uploadFile :: error", error);
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appWriteBucketId, // bucketId
        fileId // fileId
      );
      return true
    } catch (error) {
      console.log("Appwrite Service :: deleteFile :: error", error);
      return false
    }

  }

  getFilePreviewUrl(fileId) {
    return this.bucket.getFilePreview(
      conf.appWriteBucketId, // bucketId,
      fileId)
  }
}

const service = new Service()

export default service