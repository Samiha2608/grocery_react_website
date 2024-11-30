import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="mb-4">
        <div className="text-2xl font-bold">Logo</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold">PRODUCT</h4>
          <ul className="space-y-2">
            {[
              'Product overview',
              'Omni-Channel',
              'Sourcing',
              'Compliance & Contracting',
              'Payments',
              'Data & Reporting',
              'Pricing',
            ].map((item) => (
              <li key={item} className="text-[#E0DEDE]">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Why Worksome</h4>
          <ul className="space-y-2">
            {[
              'Product overview',
              'Omni-Channel',
              'Sourcing',
              'Compliance & Contracting',
              'Payments',
              'Data & Reporting',
              'Pricing',
            ].map((item) => (
              <li key={item} className="text-[#E0DEDE]">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="space-y-2">
            {[
              'Product overview',
              'Omni-Channel',
              'Sourcing',
              'Compliance & Contracting',
              'Payments',
              'Data & Reporting',
              'Pricing',
            ].map((item) => (
              <li key={item} className="text-[#E0DEDE]">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <a href="tel:+1234567890" className="text-[#E0DEDE] text-2xl">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="mailto:example@example.com" className="text-[#E0DEDE] text-2xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://facebook.com" className="text-[#E0DEDE] text-2xl">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://linkedin.com" className="text-[#E0DEDE] text-2xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com" className="text-[#E0DEDE] text-2xl">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
