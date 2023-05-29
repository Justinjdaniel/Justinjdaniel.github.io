/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable static export mode
	output: "export",
	// Change the output directory to 'dist'
	distDir: "dist",
	// Add a trailing slash to the URLs
	trailingSlash: true,
};

module.exports = nextConfig;
