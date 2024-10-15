// // /pages/api/auth/[...nextauth].js

// import { AuthSync } from "@/pages/_app";
// import { clearAuthData, setAuthData } from "@/redux/sessionSlice";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account }) {
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.accessToken = token.accessToken;
//       console.log("session",session,token)
//       // AuthSync()
//       return session;
//     },
//   },
//   // Update redirect URIs for Google OAuth
//   pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error',
//     callback: '/auth/callback',
//   },
// };



// export default NextAuth(authOptions);



// /pages/api/auth/[...nextauth].js
 
import { AuthSync } from "@/pages/_app";
import { clearAuthData, setAuthData } from "@/redux/sessionSlice";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
 
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      console.log("session",session,token)
      // AuthSync()
      return session;
    },
  },
  // Update redirect URIs for Google OAuth
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    callback: '/auth/callback',
  },
};
 
 
 
export default NextAuth(authOptions);
 