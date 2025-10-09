import { NextRequest, NextResponse } from 'next/server';
import Openfort from "@openfort/openfort-node";

// Initialize the Openfort client  
const openfort = new Openfort(process.env.OPENFORT_SECRET_KEY!); 

// Use your own authentication middleware (JWT, sessions, API key, etc.) to authenticate the user here
// function authenticateUser(req: NextRequest): boolean {
//   // Example: Check for JWT token, session, API key, etc.
//   // const token = req.headers.get('authorization');
//   return true;
// }

export async function POST(req: NextRequest) {
  // Authenticate user  
  // if (!authenticateUser(req)) {  
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });  
  // }  

  try {  
    const session = await openfort.registerRecoverySession(  
      process.env.NEXT_PUBLIC_SHIELD_PUBLISHABLE_KEY as string,  
      process.env.SHIELD_SECRET_KEY as string,  
      process.env.SHIELD_ENCRYPTION_SHARE as string
    );  
    
    return NextResponse.json({ session }, { status: 200 });  
  } catch (e) {  
    console.error(e);  
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });  
  }  
}
