import { Container } from "react-bootstrap";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <section className="privacy_policy_page">
      <Container>
        <div className="privacy_policy_content">
          <h1>Privacy Policy</h1>
          <p className="last_updated">Last Updated: February 13, 2026</p>

          <p>
            Welcome to Pikazzo Institute (“we”, “our”, “us”). We value your
            privacy and are committed to protecting your personal information
            when you use our WhatsApp API service (the “Service”).
          </p>

          <div className="policy_section">
            <h2>1. Information We Collect</h2>
            <h3>A. Information You Provide Directly</h3>
            <ul>
              <li>When you use our WhatsApp API, we may collect the following information:</li>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Chat messages and communication content</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <h3>B. Automatically Collected Information</h3>
            <ul>
              <li>We may automatically collect certain technical information including:</li>
              <li>IP address</li>
              <li>Browser type and device type</li>
              <li>Operating system</li>
              <li>Date and time of access</li>
              <li>API usage logs and performance data</li>
            </ul>
          </div>

          <div className="policy_section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>We use the collected information to:</li>
              <li>Provide and maintain the WhatsApp API service</li>
              <li>Respond to inquiries and provide support</li>
              <li>Improve our services and system performance</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="policy_section">
            <h2>3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </div>

          <div className="policy_section">
            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information. We may share
              data with:
            </p>
            <ul>
              <li>Service providers assisting in hosting and analytics</li>
              <li>Legal authorities if required by law</li>
              <li>Successor entities in case of business transfer</li>
            </ul>
          </div>

          <div className="policy_section">
            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to enhance
              user experience and analyze usage. You can manage cookie
              preferences through your browser settings.
            </p>
          </div>

          <div className="policy_section">
            <h2>6. Third-Party Services</h2>
            <p>
              Our service may integrate with third-party services such as
              WhatsApp Business API. We are not responsible for the privacy
              practices of third-party platforms.
            </p>
          </div>

          <div className="policy_section">
            <h2>7. Your Rights</h2>
            <p>
              You may have rights to access, correct, delete, or restrict the
              processing of your personal data. To exercise your rights, please
              contact us.
            </p>
          </div>

          <div className="policy_section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age.
              We do not knowingly collect personal information from children.
            </p>
          </div>

          <div className="policy_section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected with an updated revision date.
            </p>
          </div>

          <div className="policy_section">
            <h2>10. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy, contact us
              at:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:support@pikazzoinstitute.com">
                  support@pikazzoinstitute.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://pikazzoinstitute.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pikazzoinstitute.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;
