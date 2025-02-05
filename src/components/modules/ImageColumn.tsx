import React from 'react'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'

import { cn } from '../../lib/utils'

export interface ImageColumnProps {
    images: {
        image: IGatsbyImageData | undefined
        path: string
        caption: string
    }[]
    columns?: number
    numberEnabled?: boolean
}

const ImageColumn: React.FunctionComponent<ImageColumnProps> = ({ images, columns = images.length, numberEnabled = false }) => {
    images.length = columns

    return (
        <section className='w-full flex p-7.5 gap-7.5 justify-center items-center'>
            <div className='w-full max-w-1068 flex flex-col md:flex-row gap-4.5 md:gap-15 items-between'>
                {images.map((image, index) => {
                    if (image.image) return (
                        <div
                            key={index}
                            className='w-full flex flex-col'
                        >
                            <GatsbyImage
                                image={image.image}
                                alt={`Column Image ${image.image.width}`}
                                className='w-full h-full object-center'
                            />
                            <div className='w-full flex flex-col md:flex-row items-center py-4.5 justify-between'>
                                {numberEnabled && (
                                    <h1 className='w-full md:w-1/3 font-usual text-mainHeading font-bold'>0{index + 1}</h1>
                                )}
                                <p className='w-full flex items-center font-usual text-baseLH font-bold'>{image.caption}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ImageColumn