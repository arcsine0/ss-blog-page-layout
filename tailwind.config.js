module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    fontSize: {
      // Identifier: ['font size px', 'line height px']
      headerTitle: ['14px', '17px'],
      accreditationtitle : ['14px', '20px'],
      breadcrumb: ['14px', '22px'],
      formLabels: ['14px', '22px'], // ! Duplicate
      footerLinks: ['14px', '22px'], // ! Duplicate
      linksLH: ['14px', '48px'],
      base: ['16px', '19px'],
      base20: ['16px', '20px'],
      baseLH: ['16px', '22px'],
      blogDates: ['16px', '48px'],
      links: ['16px', '48px'],
      newsSubtitle : ['18px', '22px'],
      faqTitle: ['18px', '24px'],
      footerHead: [ '20px', '26px'],
      midHeading: ['24px', '30px'],
      blogTitle: ['24px','32px'], // ! Duplicate
      knowledgeSub: ['30px', '40px'],
      subHeading: ['32px', '42px','0.64px'],
      callContent: ['30px', '42px'], 
      menuSubHeading: ['36px', '46px'],
      mainHeading: ['42px', '56px'],
      productTour: ['48px', '68px'], 
      popUpHeading: ['38px', '46px'],
      popUpHeadingMobile: ['20px', '24px'],
      popUpBody: ['20px', '24px'],
      // for text modules
      headingXL: ['128px', '140.8px'],
      headingL: ['72px', '86.4px'],
      headingM: ['40px', '48px'],
      // for text modules (mobile)
      headingXLMobile: ['64px', '70.4px'],
      headingLMobile: ['40px', '48px'],
      headingMMobile: ['24px', '28.8px'],
    },

    extend: {
      colors: {
        'GerdaDarkBlue' : '#23355B',
        'GerdaYellow' : '#DFDC00',
        'GerdaMasterBlue' : '#325085',
        'GerdaElectricBlue' : '#3253D6',
        'GerdaFaqBlue': '#385181', 
        'ChevronDrop' : '#3657CE',
        'C9' : '#C9C9C9',
        '70' : '#707070',
        'red' : '#ff0000',
        'e7' : '#e7e7e7',
        'white' : '#FFFFFF',
        'gray': '#A1A1A180',
      },

      // Example Usage: className="max-width-1440"
      maxWidth: {
        '1440' : '1440px',
        '1920' : '1920px',
        '1068' : '1068px'
      },

      fontFamily: {
        'usual' : ['usual'], 
      },

      backgroundImage: {
        'ProductTourSlide1' : "url('../images/ProductTourSlide1.webp')",
      },
      screens: {
        'lg': '1025px',
        //'laptop': {'min': '1366px', 'max': '1439px'},
        '3xl': '1921px',
        '1920': '1920px',
        '1440': '1440px',
        '1080': '1080px',
      },
      spacing: {
        '4.5': '1.125rem',   // 18px
        '6.5': '1.5625rem',  // 25px
        '7.5': '1.875rem',   // 30px
        '9.5': '2.375rem',   // 38px
        '10.5': '2.625rem',  // 42px
        '12.5': '3.125rem',  // 50px
        '13' : '3.3125rem',  // 53px
        '15' : '3.75rem',    // 60px
        '18' : '4.375rem',   // 70px
        '19' : '4.6875rem',  // 75px
        '22' : '5.375rem',   // 86px
        '25' : '6.25rem',    // 100px
        '25.5' : '6.375rem', // 102px
        '26' : '6.6875rem',  // 107px
        '30' : '7.5rem',     // 120px
        '38' : '9.375rem'    // 150px
      },
      lineHeight: {
        '5.5': '1.375rem',   // 22px
        '7.5': '1.875rem',   // 30px
        '11': '2.625rem',    // 42px
        'heading': '3.5rem'
      },
      padding: {
        '60' : '60px',  
        '52' : '52px',
        '70' : '4.375rem',//70px
        '30' : '30px',
        '38': '38px',
        '42': '42px',
        '120' : '120px',
        '13' : '50px',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      borderRadius: {
        '10': '10px',
        '30': '30px',
        '31': '31px'
      },
      letterSpacing:{
        '64':'0.64px',
        '60':'0.6px',
        '48':'0.48px',
        '32':'0.32px', 
        '36':'0.36px',
        '40':'0.4px',
        '28':'0.28px',
        '72':'0.72px',
        '84':'0.84px',
      }
    },
  },
  plugins: [],
}