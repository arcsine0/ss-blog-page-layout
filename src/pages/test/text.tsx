import React from "react";

import {
    SimpleHeading
} from "../../components/intro";
import { ContentColumn } from "../../components/text";

import "../../styles/global.css";

export default function TextPage() {
    return (
        <div className="w-screen flex flex-col space-y-12">
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
            <ContentColumn
                heading="Lorem ipsum dolor sit amet consectetur"
                headingType="TOP"
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <SimpleHeading
                heading="Lorem ipsum dolor sit amet consectetur"
                type="M"
                align="CENTER"
                isQuote={true}
                isItalic={true}
            />
            <ContentColumn
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <ContentColumn
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <ContentColumn
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <ContentColumn
                heading="Lorem ipsum dolor sit amet consectetur"
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <ContentColumn
                heading="Lorem ipsum dolor sit amet consectetur"
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
            />
            <ContentColumn
                columns={[
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                ]}
            />
            <ContentColumn
                columns={[
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                ]}
            />
            <ContentColumn
                heading="Heading / List"
                columns={[
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                ]}
            />
            <ContentColumn
                columns={[
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                    'Lorem ipsum dolor sit amet consectetur. At morbi vivamus dolor bibendum eget arcu nunc tristique tellus. Vestibulum tellus egestas faucibus volutpat varius integer. Sed posuere id massa ultrices sed fames ut. Bibendum scelerisque sit consectetur ornare nibh dictumst. Quam phasellus sed cursus porttitor volutpat sit nam massa. Interdum etiam donec tincidunt fermentum suscipit turpis libero in. Diam.',
                ]}
                bgColor="gray"
            />
            <ContentColumn
                heading="Heading / List / BG"
                columns={[
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                    ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet'],
                ]}
                bgColor="gray"
            />
        </div>
    )
}
