import React from "react";
import TermsBrief from "../../components/TermsAndConditionsPage/TermsBrief/TermsBrief";
import TermsCard from "../../components/TermsAndConditionsPage/TermsCard/TermsCard";

function TermsPage() {
  const termsData = [
    {
      title: "INTELLECTUAL PROPERTY RIGHTS",
      text: "The content on this site—including text, graphics, logos, and software—is owned or licensed by Wolsey and is protected by applicable copyright, trademark, and intellectual property laws. Unauthorised use of any site materials is prohibited unless prior written consent has been obtained from Wolsey. ",
    },
    {
      title: "USE OF THE SITE",
      text: "Wolsey grants you a limited, non-transferable licence to access and use this site for personal purposes. Modification, distribution, or reproduction of the content for commercial purposes is prohibited. Any unauthorised use or exploitation of the site’s content or services may result in legal action.",
    },
    {
      title: "LIMITATION OF LIABILITY",
      text: "Wolsey endeavours to ensure the accuracy and reliability of the information provided on this website. However, Wolsey does not guarantee that the information, software, or services will meet your expectations or requirements. To the fullest extent allowed by law, Wolsey disclaims liability for any damages resulting from the use or inability to use this site or its contents.",
    },
    {
      title: "PRIVACY POLICY",
      text: "Wolsey values your privacy. For details on how we collect, use, and protect your personal information, please refer to our Privacy Policy.",
    },
    {
      title: "LINKS TO THIRD-PARTY WEBSITES",
      text: "This site may contain links to third-party websites provided solely for your convenience. Wolsey has no control over the content or practices of these external sites and does not endorse any information, products, or services available there. We recommend that you review the terms and privacy policies of any third-party sites you visit.",
    },
    {
      title: "MODIFICATIONS TO TERMS AND CONDITIONS",
      text: "Wolsey reserves the right to modify these terms without prior notice. By continuing to use the site after changes are made, you accept and agree to the revised terms.",
    },
    {
      title: "GOVERNING LAW",
      text: "These terms shall be governed by and interpreted in accordance with the laws of Wolsey’s operating jurisdiction. Any disputes arising from these terms will fall under the exclusive jurisdiction of the courts in this region.",
    },
  ];
  return (
    <>
      <TermsBrief />
      <div className="bg-mainGray">
        {termsData.map((data, index) => (
          <React.Fragment key={index}>
            <TermsCard data={data} />
          </React.Fragment>
        ))}
      </div>{" "}
    </>
  );
}

export default TermsPage;
