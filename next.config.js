// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts', 'mdx'],
    experimental: {
        typedRoutes: true,
        mdxRs: true,
    }
}
   
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
