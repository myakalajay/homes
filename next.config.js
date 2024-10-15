/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/userProfile',
          destination: '/portal/user/Profile',
        },
        {
            source: '/portal',
            destination: '/portal/user/DashBoard',
        },
        {
            source: '/myportal',
            destination: '/portal/mlo/Lodashboard',
        },
        {
            source: '/loprofile',
            destination: '/portal/mlo/Yellowuser',
        },
        {
          source: '/pdf',
          destination: '/portal/mlo/Pdf',
      }
      ];
    },
    env: {
      API_BASE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXT_API_URL:process.env.NEXT_API_URL
    },
  };
   
  module.exports = nextConfig
 
 