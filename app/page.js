import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";
import Loginbutton from "./loginbutton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Register from "./register/page";


export default async function Home() {

  const client = await connectDB;
  const db = client.db('forum')
  
  

  

  return (
    
      <>
        <Register />
        
      </>
    
    
  );
}
