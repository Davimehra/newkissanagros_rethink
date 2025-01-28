import { isMobile } from "react-device-detect";
import PrivacyPolicyPageCss from "./PrivacyPolicyPage.module.css";
import classNames from "classnames";
import NewKissanAgrosLogo from '../../assets/NewKissanAgrosLogo.png'
import { useNavigate } from "react-router-dom";


const PrivacyPolicyPage = () => {
    const navigate = useNavigate();
    return (
        <div className={classNames(PrivacyPolicyPageCss?.MainContainer)}>
            <div className={classNames(PrivacyPolicyPageCss?.Header)}>
                <img src={NewKissanAgrosLogo} name='newkissanagros-logo-img'></img>
                <label name='company-name-label'>{`NEW KISSAN AGROS`}</label>
                <div name='options-container'>
                    <label name='home-link-label' onClick={() => { navigate('/') }}>{`HOME`}</label>
                    <label name='contact-link-label' onClick={() => {
                        document?.body?.querySelector('#in-touch')?.scrollIntoView();
                    }}>{`Get In Touch`}</label>
                </div>

            </div>
            <div className={classNames(PrivacyPolicyPageCss?.FirstPage)}>

                <label name='heading-1-label'>{`Privacy Policy for New Kissan Agros`}</label>
                <p>{`Effective Date: 28-Jan-2025

At New Kissan Agros, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website www.newkissanagros.com ("the Site"). By accessing or using the Site, you consent to the collection, use, and sharing of your personal information as described in this policy.

1. Information We Collect

We may collect the following types of personal information:

    Personal Identification Information: Name, email address, phone number, company name, etc., when you contact us or inquire about products.
    Non-personal Information: We may collect non-identifiable information such as browser type, IP address, and usage data to improve the user experience.

2. How We Use Your Information

The information we collect from you may be used in the following ways:

    To respond to inquiries or customer service requests.
    To process transactions or deliver services in Future.
    To improve our website and products.
    To send periodic emails regarding updates, new products, or services.
    To comply with legal obligations and resolve disputes.

3. Data Protection and Security

We take reasonable precautions to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
4. Sharing Your Information

We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share data with trusted service providers who assist us in operating our website or conducting business, provided they agree to keep this information confidential.
5. Cookies

Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect certain features of the website.
6. Consent

By using our website, you consent to our Privacy Policy and the collection and use of your personal data as outlined. If we make changes to our privacy practices, we will post the updated policy on this page.
7. Contact Us

If you have any questions about this Privacy Policy, or if you wish to request access to, update, or delete your personal information, please contact us at:

New Kissan Agros
Near Todarmal Gate, Sirhind, Punjab, India,140406
newkissanagro@gmail.com
9417233167
                `}</p>


            </div>
        </div>
    )
}

export default PrivacyPolicyPage;