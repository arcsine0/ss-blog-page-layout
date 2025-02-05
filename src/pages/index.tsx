import { graphql, useStaticQuery, StaticQueryProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

export const Head = () => <title>Gerda Security | Coming Soon</title>
export default function Home() {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const [isFormSubmitted, setIsSubmitted] = useState(false)

	const getImage = useStaticQuery(graphql`
		query {
			gerdaLogo: file(relativePath: {eq: "logo.png"}) {
				childImageSharp {
					gatsbyImageData(formats: WEBP, width: 220, placeholder: BLURRED, quality: 100)
				}
			}
		}
  	`)
	const logo = getImage.gerdaLogo.childImageSharp.gatsbyImageData
	const onSubmit = (formData: {
		name: string,
		email: string,
		contactNum: string,
		enquiry: string
	}) => {
		const templateParams = {
			name: formData.name,
			email: formData.email,
			contactNum: formData.contactNum,
			message: formData.enquiry,
		};
		sendEmail(templateParams);
	};

	function sendEmail(templateParams: {
		name: string,
		email: string,
		contactNum: string,
		message: string
	}) {
		// window.emailjs.send('service_oh2a4lu', 'template_cblb6tg', templateParams, 'oZj10YUv31Cgmu_Pb')
		// 	.then(function (response: any) {
		// 		console.log('SUCCESS!', response.status, response.text);
		// 		setIsSubmitted(true)
		// 	}, function (error: any) {
		// 		console.log('Failed', error)
		// 	})
	}
	// const onSubmit = (formData) => console.log({formData})
	return (
		<section>
			<div className="flex w-full lg:flex-row">
				<div className="lg:w-[65%] relative min-h-screen isolate bg-gradient-to-r from-GerdaElectricBlue to-GerdaMasterBlue">
					<div className="px-5 py-5">
						<GatsbyImage image={logo} alt="Gerda Logo"></GatsbyImage>
					</div>
					<div className="lg:pt-25 lg:pl-20 2xl:pl-26">
						<div className="lg:max-w-[540px] lg:min-h-[360px] p-10 divBorder">
							<h1 className="text-white text-mainHeading">
								We’re busy making<br></br>some changes
							</h1>
							<p className="text-white text-baseLH py-5">
								Thank you for visiting our website today. We’re currently performing some essential updates
								but will be back online soon with a brand new and improved website for you to experience.
							</p>
							<p className="text-white text-baseLH">
								In the meantime, please call <a href="tel:0800123456" className="text-[#DFDA48]">0800 123456</a> with your enquiry or send us a message using the contact form.
							</p>
						</div>
					</div>
				</div>
				<div className="bg-white lg:w-[35%] lg:pt-25 lg:pl-10 lg:pb-16 lg:overflow-y-auto">
					{isFormSubmitted ? (
						<div className="lg:max-w-[80%] px-5 mt-[75px]">
							<h2 className="text-subHeading text-GerdaMasterBlue pb-8 tracking-64">Thank you for<br></br> contacting us!</h2>
							<p className="text-baseLH tracking-28">Your enquiry is important to us and whenever you contact Gerda we aim to respond within the same business day, either via email or telephone. <br /><br />However, if you have not received a response within this timeframe then please feel free to contact us again regarding it.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
							<h2 className="text-subHeading text-GerdaMasterBlue pb-8 tracking-64">Send us a message</h2>
							<div className="pb-5 space-y-3">
								<label className="formLabel tracking-28" htmlFor="name">Full Name</label>
								<br />
								<input className="fieldInput tracking-32" type="text" placeholder="Enter" {...register("name", { required: true })} />
							</div>
							<div className="pb-5 space-y-3">
								<label className="formLabel tracking-28" htmlFor="email">Email</label>
								<br />
								<input className="fieldInput tracking-32" type="email" placeholder="Enter" {...register("email", { required: true })} />
							</div>
							<div className="pb-5 space-y-3">
								<label className="formLabel tracking-28" htmlFor="contactNum">Telephone</label>
								<br />
								<input className="fieldInput tracking-32" type="tel" placeholder="Enter" {...register("contactNum", { required: true })} />
							</div>
							<div className="pb-5 space-y-3">
								<label className="formLabel tracking-28" htmlFor="enquiry">Message</label>
								<br />
								<textarea className="fieldInput tracking-32" placeholder="Enter" {...register("enquiry", { required: true })} />
							</div>

							<div className="float-right lg:justify-start py-5 lg:pr-[32%] lg:max-w-[400px]">
								<button className="btn-contact-cta ml-5 text-GerdaMasterBlue text-center tracking-32 lg:ml-16 lg:mt-8">
									Submit
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	)
}
