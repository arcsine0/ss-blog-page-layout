import React from "react";

import {
    IntroEverything,
    SimpleImage,
    ImageDesc,
    SimpleHeading,
    ScrollingBanner,
} from "../../components/modules";

import "../../styles/global.css";

import { ImageSet } from "../../lib/utils";

interface IntroPageProps {
    images: ImageSet[]
}

const IntroPage: React.FunctionComponent<IntroPageProps> = ({ images }) => {
    const imagesToInclude: string[] = ['image-1.png', 'image-2.png', 'image-3.png', 'intro-full-image.jpg']
    const relevantImages = images.filter(image => imagesToInclude.includes(image.path))

    const fullModuleImage = images.find(image => image.path === "intro-full-image.jpg")?.image
    const descModuleImage = images.find(image => image.path === "intro-image-desc.png")?.image

    return (
        <div className="w-screen flex flex-col space-y-12">
            <SimpleImage
                image={fullModuleImage}
                type="FULL"
            />
            <IntroEverything
                heading="Lorem ipsum dolor sit amet consectetur. Facilisis lobortis rhoncus pulvinar sagittis leo sapien posuere."
                body="Lorem ipsum dolor sit amet consectetur. Augue vitae a arcu rhoncus. Amet dictum tellus id viverra a vitae amet vivamus bibendum. Nec turpis ut orci volutpat. Morbi interdum dignissim et magna. Id senectus blandit sit quam adipiscing odio. In at volutpat venenatis diam. Condimentum feugiat dictum in nam pellentesque praesent hendrerit condimentum nisi."
                topic="Topic"
                date="Date"
                caption="Lorem ipsum dolor sit amet consectetur et interdum in pulvinar."
                imageName="intro-mixed.png"
            />
            <ScrollingBanner 
                images={relevantImages}
                height={500}
            />
            <ImageDesc
                heading="Lorem ipsum dolor sit amet consectetur"
                body="Lorem ipsum dolor sit amet consectetur. Augue vitae a arcu rhoncus. Amet dictum tellus id viverra a vitae amet vivamus bibendum. Nec turpis ut orci volutpat. Morbi interdum dignissim et magna. Id senectus blandit sit quam adipiscing odio. In at volutpat venenatis diam. Condimentum feugiat dictum in nam pellentesque praesent hendrerit condimentum nisi."
                list={["list item 1", "list item 2", "list item 3"]}
                image={descModuleImage}
                imageSide="LEFT"
                caption="Lorem ipsum dolor sit amet consectetur et interdum in pulvinar porttitor tellus turpis."
            />
            <ImageDesc
                heading="Lorem ipsum dolor sit amet consectetur"
                body="Lorem ipsum dolor sit amet consectetur. Augue vitae a arcu rhoncus. Amet dictum tellus id viverra a vitae amet vivamus bibendum. Nec turpis ut orci volutpat. Morbi interdum dignissim et magna. Id senectus blandit sit quam adipiscing odio. In at volutpat venenatis diam. Condimentum feugiat dictum in nam pellentesque praesent hendrerit condimentum nisi."
                list={["list item 1", "list item 2", "list item 3"]}
                image={descModuleImage}
                imageSide="RIGHT"
                caption="Lorem ipsum dolor sit amet consectetur et interdum in pulvinar porttitor tellus turpis."
            />
            <SimpleHeading 
                heading="Lorem ipsum dolor sit amet consectetur"
                type="WD"
                align="CENTER"
                topic="Topic"
                date="Date"
            />
            <SimpleHeading
                heading="Lorem ipsum dolor sit amet."
                type="XL"
            />
            <SimpleHeading
                heading="Lorem ipsum dolor sit amet consectetur. Facilisis lobortis rhoncus pulvinar sagittis leo sapien posuere."
                type="L"
            />
            <SimpleHeading
                heading="Lorem ipsum dolor sit amet consectetur. Facilisis lobortis rhoncus pulvinar sagittis leo sapien posuere. Blandit amet tellus tortor volutpat netus ipsum gravida cum odio. Ornare purus ultrices nisi eleifend semper egestas at tellus cursus. Odio ultrices tortor porttitor et lectus."
                type="M"
            />
            <SimpleHeading 
                heading="Lorem ipsum dolor sit amet consectetur"
                type="M"
                align="CENTER"
                isQuote={true}
                isItalic={true}
            />
        </div>
    )
}

export default IntroPage