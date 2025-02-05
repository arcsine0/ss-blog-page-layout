import React from 'react'
import { cn } from '../../lib/utils'

export interface SimpleHeadingProps {
	heading: string
	type: 'XL' | 'L' | 'M' | 'WD'
	align?: 'LEFT' | 'RIGHT' | 'CENTER'
	topic?: string
	date?: string
	isQuote?: boolean
	isItalic?: boolean
}

const SimpleHeading: React.FunctionComponent<SimpleHeadingProps> = ({ heading, type, align = 'LEFT', topic, date, isQuote = false, isItalic = false }) => {
	return (
		<section className='w-full flex flex-col p-7.5 gap-4.5 justify-center items-center'>
			<h1 className={cn(
				'font-usual w-full max-w-1068',
				type === 'XL' && 'text-headingXLMobile md:text-headingXL font-extrabold',
				type === 'L' && 'text-headingLMobile md:text-headingL font-medium',
				type === 'M' && 'text-headingMMobile md:text-headingM font-medium',
				type === 'WD' && 'text-knowledgeSub md:text-productTour font-semibold',
				align === 'RIGHT' && 'text-right',
				align === 'CENTER' && 'text-center',
				isItalic && 'italic'
			)}>
				{isQuote ? `"${heading}"` : heading}
			</h1>
			<div className='flex items-center gap-4.5'>
                {topic && <p className='font-usual text-popUpBody font-medium text-red'>{topic}</p>}
                {date && <p className='font-usual text-popUpBody font-medium'>{date}</p>}
            </div>
		</section>
	)
}

export default SimpleHeading;
