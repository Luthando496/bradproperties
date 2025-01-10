import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization:{
        params:{
            prompt:"consent",
            access_type:'offline',
            response_type:'code'
        }
      }
    }),
    // ...add more providers here
  ],

  callbacks:{
    //called on successful sign in
    async signIn({profile}){
        //connect to database
        //check if user exists
        //if not create new user
        //return true to allow sign in
    },

    // session callback function that modifies session object

    async session({session}){
            // get user from database
            // assign user id from session
            // return session
        }
  }
}

export default NextAuth(authOptions)