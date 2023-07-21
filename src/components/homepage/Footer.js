import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer>
      <div>Follow us on social media:</div>
      <div class="social-icons">
        <a href="#" target="_blank" title="Facebook">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            style={{ padding: '10px' }}
          />
        </a>
        <a href="#" target="_blank" title="Twitter">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            style={{ padding: '10px' }}
          />
        </a>
        <a href="#" target="_blank" title="Instagram">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            style={{ padding: '10px' }}
          />
        </a>
      </div>
      <div>© 2023 Company Name. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
