import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function PrivacyPolicyPage() {
  return (
    <div className="border border-zinc-200 border-solid relative size-full bg-white min-h-screen">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Header />

        {/* Content Area */}
        <div className="bg-zinc-50 box-border content-stretch flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 max-w-[800px] relative shrink-0 w-full">
            {/* Breadcrumb */}
            <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <Link to="/" className="font-normal leading-6 text-zinc-500 text-sm hover:text-zinc-700">
                Home
              </Link>
              <span className="text-zinc-400">/</span>
              <span className="font-normal leading-6 text-zinc-500 text-sm">
                Privacy Policy
              </span>
            </div>

            {/* Title */}
            <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
              <h1 className="font-bold leading-tight text-zinc-950 text-4xl sm:text-5xl tracking-tight">
                Privacy Policy
              </h1>
              <p className="font-normal leading-6 text-zinc-600 text-base">
                Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  1. Introduction
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  The African Genomic Archive for Response & Insight (AGARI) is committed to the lawful processing of personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA) of South Africa. Given our principle-based approach to governance, we also seek to be broadly compliant with similar and equivalent data protection laws like the EU General Data Protection Regulations, and others of relevance to regional data governance.
                </p>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-2">
                  This Privacy Policy explains how we collect, use, store, and protect your personal information when you use the AGARI platform.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  2. Acceptance
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  By accepting our Policy, you are deemed to have read, understood, accepted, and agreed to be bound by all of its terms.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  3. Information We Collect
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We collect the following personal information:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Name and contact information (email address)
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Organisation affiliation and role
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Account credentials (securely encrypted)
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Profile information (optional biography)
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-4">
                  We collect the following information about how you use the platform, including:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Login times and session duration
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Data access and download activities (for audit purposes)
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Platform interactions and feature usage
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  4. Your Data Obligations
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  You may only send, input or upload your own personal information or other data where you are lawfully authorised to do so, which includes warranting as far as reasonably possible for the authenticity and accuracy of the data being provided. We generally do not accept or process the personal information of children when a data subject user is below the age of 18 (eighteen). If you have mistakenly uploaded or shared any data described above, please alert the system administrator immediately.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  5. How We Use Your Information
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To provide and maintain the AGARI platform services
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To authenticate your identity and manage your account
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To communicate with you about your account and platform updates
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To enforce access controls and sharing policies
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To maintain audit logs for security and compliance purposes, and to maintain broader system security
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To complete necessary business functions like internal auditing, planning and reporting
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    To comply with legal obligations and regulatory requirements
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  6. Lawful Basis for Processing
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We process your personal information based on the following legal grounds:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Consent:</strong> You have provided explicit consent for account creation and data processing through the user registration process
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Contractual necessity:</strong> Processing is necessary to provide the platform services you have requested or fulfil other relevant contractual obligations
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Legal obligation:</strong> We must comply with applicable laws and regulations
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Legitimate interests:</strong> Processing is necessary for a vital or legitimate interest of you or the responsible party (asserting a legitimate interest will always be determined balanced against data subject rights)
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  7. Data Sharing and Disclosure
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We do not sell your personal information or exchange or share your data for commercial purposes. We may share your information:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Within your organisation:</strong> Organisation administrators can view member information for management purposes
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Within our organisation:</strong> Other entities, arms or organisations within or related to our organisation may have data shared with them for the purposes of fulfilling a legitimate interest
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>With your consent:</strong> When you explicitly authorise sharing
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Legal requirements:</strong> When required by law, court order, or regulatory authority
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Service providers:</strong> With trusted third-party service providers and affiliates who assist in platform operations, for the purposes of fulfilling our obligations to you among other purposes
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-4">
                  We will ensure all sharing is lawful, and supported by robust security, and is contractually protected.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  8. Data Security
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We implement appropriate technical, security and organisational measures to protect your personal information, including but not limited to:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Encryption of data in transit and at rest
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Access controls and authentication mechanisms
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Regular security audits and vulnerability assessments
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Secure server environment
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Staff training on data protection and privacy
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Incident response and disaster recovery procedures
                  </li>
                </ul>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-4">
                  We will also ensure that all of our employees, third party service providers, divisions and partners (including their employees and third-party service providers) having access to your personal information are bound by appropriate and legally binding confidentiality obligations and process your personal information at standards equal to or higher than our own.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  9. Your Data Rights
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  You have the following rights regarding your personal information inter alia:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right of access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to correct and/or delete:</strong> Request the correction, destruction or deletion of your personal information if the personal information is inaccurate; irrelevant; excessive; out of date; incomplete; obtained unlawfully; or that we are no longer authorised to retain
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to object:</strong> Object, on reasonable grounds relating to your particular situation to the processing of your personal information
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to object to marketing:</strong> Object at any time to the processing of your personal information for purposes of direct marketing
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    <strong>Right to withdraw consent:</strong> Withdraw consent for processing where consent is the legal basis for processing
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  10. Data Retention and Accuracy
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We only retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law or you have consented to a longer retention period.
                </p>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-4">
                  We will try to keep the personal information we collect as accurate, complete and up to date as is necessary for the purposes defined in this policy. From time to time we may request you to update your personal information on the website. Please note that in order to better protect you and safeguard your personal information, we may take steps to verify your identity before granting you access to your account or making any corrections to your personal information.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  11. International Data Transfers
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  AGARI operates primarily within South Africa. If data is transferred outside of South Africa, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:
                </p>
                <ul className="list-disc ms-6 space-y-2 mt-2">
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    We will only transfer your personal information to countries that have been deemed to provide an adequate level of protection for personal information
                  </li>
                  <li className="font-normal leading-6 text-zinc-700 text-base">
                    Standard contractual clauses approved by relevant data protection authorities will be used to advance protection
                  </li>
                </ul>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or platform notification. The "Last updated" date at the top of this policy indicates when it was last revised.
                </p>
              </section>

              <section className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                <h2 className="font-bold leading-7 text-zinc-950 text-2xl">
                  13. Contacts and Complaints
                </h2>
                <p className="font-normal leading-6 text-zinc-700 text-base">
                  If you wish to enact any of your data rights as outlined in this Policy, or have any questions in relation to this Policy, please contact the system administrator who will refer you to the appropriate contact.
                </p>
                <p className="font-normal leading-6 text-zinc-700 text-base mt-4">
                  You have the right to make a complaint at any time to the South African data regulator's office (Information Regulator's Office of South Africa), and the relevant data protection authority to your data processing. We would, however, appreciate the chance to deal with your concerns before you approach any such relevant regulator, so please contact us in the first instance.
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;

