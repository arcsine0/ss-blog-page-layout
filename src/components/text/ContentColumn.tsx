import React from 'react'

import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'

import { cn } from '../../lib/utils'

export interface ContentColumnProps {
    heading?: string
    headingType?: 'TOP' | 'SIDE'
    columns: (string | string[] | { 
        image: IGatsbyImageData | undefined, 
        extended: boolean,
        width?: number | string,
        height?: number | string,
    })[]
    bgColor?: string
}

const ContentColumn: React.FunctionComponent<ContentColumnProps> = ({ heading, headingType = 'SIDE', columns, bgColor }) => {
    const isArrayOfStrings = (arr: any): arr is string[] => {
        return Array.isArray(arr) && arr.every(item => typeof item === 'string');
    };

    const renderColumn = (
        column: string | string[] | { 
            image: IGatsbyImageData | undefined, 
            extended: boolean,
            width?: number | string,
            height?: number | string, 
        } | undefined,
        key: number
    ) => {
        if (column) {
            if (typeof column === 'string') {
                return <p key={key} className="font-usual text-baseLH font-medium">{column}</p>;
            } else if (isArrayOfStrings(column)) {
                return (
                    <ul
                        key={key}
                        className='w-full flex flex-col list-disc list-inside p-0 m-0'
                    >
                        {column.map((item, j) => (
                            <li
                                key={j}
                                className='w-full font-usual text-baseLH font-medium'
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )
            } else {
                if (column.image) return (
                    <div 
                        className={cn(
                            column.extended && 'col-span-2'
                        )}
                        style={{
                            width: column.width ? column.width : 'auto',
                            height: column.height ? column.height : 'auto',
                        }}
                    >
                        <GatsbyImage
                            key={key}
                            image={column.image}
                            alt="Column Image"
                            className={"w-full h-full object-contain"}
                        />
                    </div>
                );
            }
        }

        return null;
    };

    const numColumns = columns.reduce((acc, curr) => {
        if (typeof curr === 'object' && 'extended' in curr && curr.extended) {
            return acc + 2;
        }
        return acc + 1;
    }, heading && headingType === 'SIDE' ? 1 : 0);

    return (
        <section className={cn(
            'w-full p-7.5 flex items-center justify-center',
            bgColor && `bg-${bgColor}`,
        )}>
            <div className={cn(
                'max-w-1068',
                `grid gap-4.5 md:gap-15`,
                numColumns === 1 && 'grid-cols-1 md:grid-cols-1',
                numColumns === 2 && 'grid-cols-1 md:grid-cols-2',
                numColumns === 3 && 'grid-cols-1 md:grid-cols-3',
                headingType === "TOP" && "grid-rows-[auto_1fr]",
            )}>
                {heading && headingType === 'TOP' &&
                    <h1 className='font-usual text-knowledgeSub font-bold col-span-full'>{heading}</h1>
                }
                {heading && headingType === 'SIDE' &&
                    <h1 className='font-usual text-knowledgeSub font-bold'>{heading}</h1>
                }
                {columns.map((column, index) => renderColumn(column, index))}
            </div>
        </section>
    )
}

export default ContentColumn