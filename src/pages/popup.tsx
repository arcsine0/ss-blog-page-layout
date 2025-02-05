import * as React from "react"

export default function Popup() {
	return (
		<div
			className="relative 
                rounded-31
                border-GerdaElectricBlue 
                border-2 
                lg:max-w-[1068px] 
                sm:max-w-[303px]
                max-w-[303px]
                lg:h-[473px] 
                sm:h-[600px] 
                h-[600px]
                lg:mt-[279px] 
                sm:mt-[100px] 
                mt-[100px] 
                ml-auto 
                mr-auto
            "
		>
			<div className="header pt-[36px] lg:pt-[53px] sm:pt-[36px] pl-[30px] lg:pl-[59px] sm:pl-[30px]">
				<button className="absolute right-[23px] lg:right-9 sm:right-[23px] top-[28px] lg:top-9 sm:top-[28px] rounded-30 border-GerdaYellow text-GerdaElectricBlue border-2 w-[32px] lg:w-[41px] sm:w-[32px] h-[32px] lg:h-[41px] sm:h-[32px]">
					X
				</button>
				<h1 className="w-[597px] text-popUpHeadingMobile lg:text-popUpHeading sm:text-popUpHeadingMobile text-GerdaElectricBlue">
					Use of Cookies
				</h1>
				<hr className="border-GerdaYellow border-2 mt-3" />
			</div>
			<div className="body pl-[30px] lg:pl-[59px] sm:pl-[30px]">
				<p className="text-GerdaMasterBlue text-base lg:text-popUpBody sm:text-base w-[255px] lg:w-[844px] md:w-[255px] sm:w-[255px] mt-7 lg:mt-13 sm:mt-7 pl-2">
					Our website uses cookies to distinguish you from other users of our website.
					This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
					<br />
					<br />
					Please accept the cookies for the best experience.
				</p>
			</div>

			<div className="footer flex flex-col lg:flex-row sm:flex-col space-y-[30px] lg:space-x-[67px] lg:space-y-[0px] sm:space-y-[30px] p-2 lg:pl-[59px] sm:pl-[20px] mt-13">
				<button className="rounded-30 hover:bg-GerdaElectricBlue hover:text-white lg:text-popUpBody sm:text-base border-GerdaElectricBlue border-2 lg:w-[192px] sm:w-[261px] h-[50px] lg:h-[60px] sm:h-[50px]">
					Accept All
				</button>
				<button className="rounded-30 hover:bg-GerdaElectricBlue hover:text-white lg:text-popUpBody sm:text-base border-GerdaElectricBlue border-2 lg:w-[192px] sm:w-[261px] h-[50px] lg:h-[60px] sm:h-[50px]">
					Decline All
				</button>
				<button className="rounded-30 hover:bg-GerdaElectricBlue hover:text-white lg:text-popUpBody sm:text-base border-GerdaElectricBlue border-2 lg:w-[192px] sm:w-[261px] h-[50px] lg:h-[60px] sm:h-[50px]">
					Read more
				</button>
			</div>
		</div>
	);
}