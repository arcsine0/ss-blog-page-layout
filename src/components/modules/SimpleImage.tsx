import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { cn } from '../../lib/utils';

export interface SimpleImageProps {
    image: IGatsbyImageData | undefined
    type: "FULL" | "STRIPE" | "FIXED"
    width?: number | string
    height?: number | string
}

const SimpleImage: React.FunctionComponent<SimpleImageProps> = ({ image, type = 'FULL', width = '100%', height = 'auto' }) => {
    if (image) return (
        <section className={cn(
            'w-full flex items-center justify-center',
            type === 'FIXED' && 'p-7.5'
        )}>
            <div
                style={{
                    width: type === "FIXED" ? width : '100%',
                    height: type === "STRIPE" ? height : 'auto',
                }}
            >
                <GatsbyImage
                    image={image}
                    alt='Intro Full Image'
                    className={'w-full h-full object-cover object-center'}
                />
            </div>

        </section>
    )
}

export default SimpleImage;