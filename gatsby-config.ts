/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import { graphql } from "gatsby";

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				"icon": "src/images/favicon.png"
			}
		},

		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-image`,
	],
	graphqlTypegen: true,
}
