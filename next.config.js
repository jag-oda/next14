 /** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts', 'mdx'],
    experimental: {
        typedRoutes: true,
        mdxRs: true,
        serverActions: true,
    },
    images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
    redirects: async () => {
        return [{
            source: "/products",
            destination: "/products/1",
            permanent: true,
        }
    ]
    }
}
   
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
