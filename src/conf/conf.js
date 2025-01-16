const conf = {
  appWriteUrl: string(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: string(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf