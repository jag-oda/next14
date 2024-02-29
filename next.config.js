 /** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts', 'mdx'],
    experimental: {
        typedRoutes: true,
        mdxRs: true,
    },
    images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
    redirects: async () => {
        return [{
            source: "/products/t-shirts",
            destination: "//products/t-shirts/1",
            permanent: false,
        }]
    }
}
   
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
