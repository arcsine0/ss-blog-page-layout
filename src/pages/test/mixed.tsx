import React from 'react'

import { 
    ImageDesc,
    ContentColumn,
    ImageColumn
} from '../../components/modules'

import '../../styles/global.css'

import { ImageSet } from '../../lib/utils'

interface MixedPageProps {
    images: ImageSet[]
}

const MixedPage: React.FunctionComponent<MixedPageProps> = ({ images }) => {
    const imagesToInclude: string[] = ['image-1.png', 'image-2.png', 'image-3.png', 'intro-full-image.jpg']
    const relevantImages = images.filter(image => imagesToInclude.includes(image.path))

    const descModuleImage = images.find(image => image.path === "intro-image-desc.png")?.image

    return (
        <div className='w-screen flex flex-col space-y-12'>
            <ImageDesc
                heading="Lorem ipsum dolor sit amet consectetur"
                body="Lorem ipsum dolor sit amet consectetur. Augue vitae a arcu rhoncus. Amet dictum tellus id viverra a vitae amet vivamus bibendum. Nec turpis ut orci volutpat. Morbi interdum dignissim et magna. Id senectus blandit sit quam adipiscing odio. In at volutpat venenatis diam. Condimentum feugiat dictum in nam pellentesque praesent hendrerit condimentum nisi."
                list={["list item 1", "list item 2", "list item 3"]}
                image={descModuleImage}
                imageFixed={false}
                imageSide="LEFT"
                caption="Lorem ipsum dolor sit amet consectetur et interdum in pulvinar porttitor tellus turpis."
            />
            <ImageDesc
                heading="Lorem ipsum dolor sit amet consectetur"
                body="Lorem ipsum dolor sit amet consectetur. Augue vitae a arcu rhoncus. Amet dictum tellus id viverra a vitae amet vivamus bibendum. Nec turpis ut orci volutpat. Morbi interdum dignissim et magna. Id senectus blandit sit quam adipiscing odio. In at volutpat venenatis diam. Condimentum feugiat dictum in nam pellentesque praesent hendrerit condimentum nisi."
                list={["list item 1", "list item 2", "list item 3"]}
                image={descModuleImage}
                imageFixed={false}
                imageSide="RIGHT"
                caption="Lorem ipsum dolor sit amet consectetur et interdum in pulvinar porttitor tellus turpis."
            />
            <ContentColumn
                columns={[
                    { image: descModuleImage, extended: false, height: 250 },
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <ImageColumn
                images={relevantImages.filter(image => image.path !== "intro-full-image.jpg")}
                columns={2}
                numberEnabled={true}
            />
            <ContentColumn
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    { image: descModuleImage, extended: false },
                ]}
                heading='Lorem ipsum dolor sit amet consectetur.'
            />
            <ContentColumn
                columns={[
                    { image: descModuleImage, extended: false },
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                ]}
            />
            <ContentColumn
                columns={[
                    { image: descModuleImage, extended: true, height: 250 },
                ]}
                heading='Lorem ipsum dolor sit amet consectetur.'
            />
        </div>
    )
}

export default MixedPage