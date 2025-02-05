import React from 'react';

const HeadComponents = [
    <link
        key="usual"
        rel="stylesheet preload prefetch"
        href="https://use.typekit.net/pwo5bxf.css"
        as="style"
        type="text/css"
        crossOrigin="anonymous"
    />,
  <script key="smtp" defer src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
]; 

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

export { onRenderBody };