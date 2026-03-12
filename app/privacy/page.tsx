import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mantsu collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information we collect",
    content:
      "We collect information you provide directly, such as your name, email address, company name, and any other details you share when contacting us, creating an account, or using our services. We also automatically collect usage data, device information, and log data when you interact with our platform.",
  },
  {
    title: "How we use your information",
    content:
      "We use the information we collect to provide, maintain, and improve our services; communicate with you about your account and our products; respond to your inquiries and support requests; send you technical notices, updates, and administrative messages; and comply with legal obligations.",
  },
  {
    title: "Data storage and security",
    content:
      "Your data is stored on secure servers with industry-standard encryption at rest and in transit. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. For on-premise deployments, data remains entirely within your infrastructure.",
  },
  {
    title: "Data sharing and third parties",
    content:
      "We do not sell your personal data. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or serving our users — provided those parties agree to keep this information confidential. We may also disclose information when required by law.",
  },
  {
    title: "Cookies and tracking",
    content:
      "We use essential cookies to ensure our platform functions correctly. We may also use analytics cookies to understand how you use our services and improve your experience. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your rights",
    content:
      "Depending on your location, you may have the right to access, correct, delete, or export your personal data. You may also have the right to object to or restrict certain processing activities. To exercise these rights, please contact us at privacy@mantsu.com.",
  },
  {
    title: "Data retention",
    content:
      "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When data is no longer needed, it is securely deleted or anonymized.",
  },
  {
    title: "Changes to this policy",
    content:
      "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy periodically.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="px-4 pt-12 pb-10 md:px-8 md:pt-16 md:pb-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              // Legal
            </p>
            <h1 className="mt-4 font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-slate-400">
              Last updated: March 1, 2026
            </p>
          </section>
        </Wrapper>
      </div>

      <Divider />

      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <article className="mx-auto max-w-[720px] px-4 py-12 md:px-8">
            <p className="text-base leading-relaxed text-slate-600">
              At Mantsu, we take your privacy seriously. This policy describes
              how we collect, use, and protect your personal information when you
              use our platform and services.
            </p>
            {sections.map((section, i) => (
              <div key={i} className="mt-10">
                <h2 className="font-serif text-[20px] leading-tight tracking-[-0.6px] text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {section.content}
                </p>
              </div>
            ))}
            <div className="mt-10">
              <h2 className="font-serif text-[20px] leading-tight tracking-[-0.6px] text-slate-900">
                Contact us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                If you have any questions about this privacy policy, please
                contact us at privacy@mantsu.com.
              </p>
            </div>
          </article>
        </Wrapper>
      </div>

      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
