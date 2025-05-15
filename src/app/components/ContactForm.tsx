"use client";

import React, { useEffect, useRef } from "react";

const ContactForm: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load the script when the component mounts
    const script = document.createElement("script");
    script.src = "https://link.receptyv.ca/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="contact-form" className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="font-heading text-base tablet:text-lg desktop:text-xl text-secondary-light uppercase tracking-wide">
            BOOK YOUR FREE PROPERTY ASSESSMENT
          </h3>
          <h2 className="font-heading text-2xl tablet:text-3xl desktop:text-4xl text-[#566e5a] font-medium">
            LET&apos;S BRING YOUR BACKYARD SUITE TO LIFE STARTING TODAY!
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="h-[510px]">
            <iframe
              ref={iframeRef}
              src="https://link.receptyv.ca/widget/form/YxldwbvqWgvgeTK0WUKE"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "4px",
              }}
              id="inline-YxldwbvqWgvgeTK0WUKE"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="TinyHome Project Form Registration"
              data-height="510"
              data-layout-iframe-id="inline-YxldwbvqWgvgeTK0WUKE"
              data-form-id="YxldwbvqWgvgeTK0WUKE"
              title="TinyHome Project Form Registration"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
