import React from "react";

import { 
    SimpleImage,
    ImageColumn,
    ScrollingBanner,
} from "../../components/modules";

import { ImageSet } from "../../lib/utils";

import "../../styles/global.css";

interface ImagesPageProps {
    images: ImageSet[]
}

const ImagesPage: React.FunctionComponent<ImagesPageProps> = ({ images }) => {
    const imagesToInclude: string[] = ['image-1.png', 'image-2.png', 'image-3.png', 'intro-full-image.jpg']
    const relevantImages = images.filter(image => imagesToInclude.includes(image.path))

    const fullModuleImage = relevantImages.find(image => image.path === "intro-full-image.jpg")?.image
    const stripeModuleImage = relevantImages.find(image => image.path === "image-3.png")?.image
    const fixedModuleImage = relevantImages.find(image => image.path === "image-1.png")?.image

    return (
        <div className="w-screen flex flex-col space-y-12">
            <SimpleImage
                image={fullModuleImage}
                type="FULL"
            />
            <SimpleImage
                image={stripeModuleImage}
                type="STRIPE"
                height={500}
            />
            <SimpleImage
                image={fixedModuleImage}
                type="FIXED"
                width={1200}
            />
            <ImageColumn 
                images={relevantImages.filter(image => image.path !== "intro-full-image.jpg")}
                columns={2}
            />
            <ImageColumn 
                images={relevantImages.filter(image => image.path !== "intro-full-image.jpg")}
            />
            <ScrollingBanner 
                images={relevantImages.filter(image => image.path !== "intro-full-image.jpg")}
                width={250}
                height={500}
            />
        </div>
    )
}

export default ImagesPage