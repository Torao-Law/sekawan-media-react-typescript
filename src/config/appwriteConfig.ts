import { Account, Client } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APP_WRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APP_WRITE_PROJECT);

export const account = new Account(client)