import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface IntroEverythingProps {
    heading: string
    body?: string
    topic: string
    date: string
    caption: string
    imageName: string
}

const IntroEverything: React.FunctionComponent<IntroEverythingProps> = ({ heading, body, topic, date, caption, imageName }) => {
    // Query for images in the images directory
    // might not be optimal as it queries every image so this will be a temporary solution
    const data = useStaticQuery(graphql`
        query {
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

    // Find the image that matches the provided imageName
    const imageData = data.allFile.edges.find((edge: any) => edge.node.relativePath === imageName)

    const image = imageData ? getImage(imageData.node) : null

    if (image) return (
        <section className="flex flex-col md:flex-row bg-gray">
            <div className='w-full flex justify-end md:w-1/2 px-7.5 pt-7.5 md:px-15 md:pt-15'>
                <div className='max-w-[720px] h-full flex flex-col justify-between'>
                    <div className="flex flex-col gap-4.5">
                        <h1 className='w-full font-usual font-medium text-headingMMobile md:text-headingM'>{heading}</h1>
                        {body && <p className='w-full font-usual font-medium text-baseLH'>{body}</p>}
                    </div>
                    <div className="flex items-center py-4.5 gap-4.5">
                        <p className="font-usual font-bold text-baseLH">{topic}</p>
                        <p className="font-usual font-bold text-baseLH">{date}</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
                <GatsbyImage
                    image={image}
                    alt={imageName}
                    className='w-full object-cover gap-4.5'
                />
                <p className='w-full flex items-center p-4.5 font-usual text-baseLH font-bold'>
                    {caption}
                </p>
            </div>
        </section>
    )
}

export default IntroEverything;