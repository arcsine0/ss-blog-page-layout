import React from 'react'

import IntroPage from './test/intro'
import TextPage from './test/text'
import ImagesPage from './test/image'
import MixedPage from './test/mixed'

import { graphql, useStaticQuery } from 'gatsby';
import type { IGatsbyImageData } from "gatsby-plugin-image";

import '../styles/global.css'

export default function Test() {
    const getColumnImages: Queries.ImagesQueryQuery = useStaticQuery(graphql`
                query ImagesQuery {
                    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                        edges {
                            node {
                                relativePath
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP]
                                        quality: 100,
                                    )
                                }
                            }
                        }
                    }
                }
              `)

    const queryData = getColumnImages.allFile.edges
    const imagesData: {
        image: IGatsbyImageData | undefined,
        path: string
        caption: string
    }[] = queryData.map(query => ({
        image: query.node.childImageSharp?.gatsbyImageData,
        path: query.node.relativePath,
        caption: 'Lorem ipsum dolor sit amet consectetur et interdum in pulvinar porttitor tellus turpis.'
    }))

    return (
        <div className='w-screen flex flex-col gap-12'>
            <IntroPage 
                images={imagesData}
            />
            <TextPage />
            <ImagesPage 
                images={imagesData}
            />
            <MixedPage 
                images={imagesData}
            />
        </div>
    )
}
