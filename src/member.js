// middleware.js
//import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import store from './redux/store'
import { useSelector } from 'react-redux';

export async function middleware(req) {
  //const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const isLoggedIn = await useSelector(state => state?.auth?.isLoggedIn);
  const url = req.nextUrl.clone()
  if (!isLoggedIn) {
    debugger
    // If user is not logged in and trying to access protected routes, redirect to home
    if (url.pathname.startsWith('/userProfile') || url.pathname.startsWith('/portal') || url.pathname.startsWith('/myportal') || url.pathname.startsWith('/loprofile')) {
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  } else {
    // If user is logged in, allow access to protected routes
    // You can also add additional logic here if needed
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/userProfile', '/portal', '/myportal', '/loprofile'], // Apply middleware to these paths
}
