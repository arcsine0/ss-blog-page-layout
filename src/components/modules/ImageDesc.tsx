import * as React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import { cn } from '../../lib/utils'

export interface ImageDescProps {
	heading: string
	body?: string
	list?: string[]
	image: IGatsbyImageData | undefined
	imageFixed?: boolean
	imageSide: "LEFT" | "RIGHT"
	caption: string
}

const ImageDesc: React.FunctionComponent<ImageDescProps> = ({ heading, body, list, image, imageFixed = true, imageSide, caption }) => {
	if (image) return (
		<section className={cn(
			'w-full flex flex-col md:flex-row',
			!imageFixed && 'p-7.5'
		)}>
			<div className={cn(
				'w-full md:w-1/2 flex flex-col',
				imageFixed && imageSide === "LEFT" && 'order-first md:items-start',
				imageFixed && imageSide === "RIGHT" && 'order-last md:items-end',
				!imageFixed && imageSide === "LEFT" && 'order-first md:items-end',
				!imageFixed && imageSide === "RIGHT" && 'order-last md:items-start',
				!imageFixed && 'max-w-1068 justify-center items-center'
			)}>
				<div className={cn(
					!imageFixed && 'max-w-[534px]'
				)}>
					<GatsbyImage
						image={image}
						alt={'image descriptor image'}
						className={cn(
							'w-full h-full gap-4.5',
							!imageFixed && 'object-contain',
						)}
					/>
				</div>
				<div className={cn(
					!imageFixed && 'max-w-[534px]'
				)}>
					<p className={cn(
						'w-full flex items-center p-4.5 font-usual text-baseLH font-bold',
						imageSide === "LEFT" ? "justify-end" : "justify-start"
					)}>
						{caption}
					</p>
				</div>

			</div>
			<div className={cn(
				'w-full flex md:w-1/2',
				imageFixed && imageSide === "LEFT" && 'md:justify-start',
				imageFixed && imageSide === "RIGHT" && 'md:justify-end',
				!imageFixed && imageSide === "LEFT" && 'md:justify-start',
				!imageFixed && imageSide === "RIGHT" && 'md:justify-end',
				!imageFixed && 'max-w-1068 justify-center items-center'
			)}>
				<div className={cn(
					'flex flex-col gap-4.5 p-7.5 md:p-15',
					imageFixed ? 'max-w-[720px]' : 'max-w-[534px]' 
				)}>
					<h1 className='w-full font-usual font-medium text-headingMMobile md:text-headingM'>{heading}</h1>
					{body && <p className='w-full font-usual font-medium text-baseLH'>{body}</p>}
					{list && <ul className='w-full font-usual font-medium text-baseLH list-disc list-inside'>
						{list.map((item, index) => <li key={index}>{item}</li>)}
					</ul>}
				</div>
			</div>
		</section>
	)
}

export default ImageDesc;