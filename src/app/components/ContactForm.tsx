"use client";

import React, { useRef } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";

const ContactForm: React.FC = () => {
  const t = useTranslations("contactForm");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div id="contact-form" className="w-full py-12">
      <Script
        src="https://link.receptyv.ca/js/form_embed.js"
        strategy="lazyOnload"
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="font-heading text-base tablet:text-lg desktop:text-xl text-secondary-light uppercase tracking-wide">
            {t("subtitle")}
          </h3>
          <h2 className="font-heading text-2xl tablet:text-3xl desktop:text-4xl text-[#566e5a] font-medium">
            {t("title")}
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
