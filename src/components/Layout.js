// 'use client'
// import { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Newfooter from './NewFooter';
// import { useSelector } from 'react-redux';
// import LoginFooter from './LoginFooter';
 
// const Layout = ({ children }) => {
//     const [isMounted, setIsMounted] = useState(false);
//    const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);
 
//     useEffect(() => {
//       setIsMounted(true);
//     }, []);
 
//     if (!isMounted) {
//       return null;
//     }
 
//   return (
//       <div>
//         <Navbar />
//           <main>{ children}</main>
//        {isLoggedIn ? <LoginFooter/>:<Newfooter/>}
//        </div>
//   );
// };
 
// export default Layout;

'use client'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Newfooter from './NewFooter';
import { useSelector } from 'react-redux';
import LoginFooter from './LoginFooter';
import Head from 'next/head'
 
const Layout = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);
   const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);
 
    useEffect(() => {
      setIsMounted(true);
    }, []);
 
    if (!isMounted) {
      return null;
    }
 
  return (
      <div>
        <Head>
        <title>Mortgage Lending App | HomeRatesYard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Navbar />
          <main>{ children}</main>
       {isLoggedIn ? <LoginFooter/>:<Newfooter/>}
       </div>
  );
};
 
export default Layout;