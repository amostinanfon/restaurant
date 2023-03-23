/** @type {import('next').NextConfig} */
  const nextConfig = {
  images : {
    domains : [
      "res.cloudinary.com"
    ]
  }
 }

//   module.exports = 


module.exports = nextConfig ;


// module.exports = {
//   async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'https://api.example.com/:path*',
//         },
//       ]
//     },
// };


