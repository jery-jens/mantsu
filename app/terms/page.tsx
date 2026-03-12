import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of the Mantsu platform and services.",
};

const sections = [
  {
    title: "Acceptance of terms",
    content:
      "By accessing or using Mantsu's platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services. These terms apply to all visitors, users, and others who access the platform.",
  },
  {
    title: "Description of services",
    content:
      "Mantsu provides a modular production software platform that enables manufacturing teams to build, deploy, and manage production applications. Our services include the platform itself, hosting options, support, and related documentation.",
  },
  {
    title: "Account responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Acceptable use",
    content:
      "You agree to use our services only for lawful purposes and in accordance with these terms. You may not use the platform to transmit harmful code, attempt to gain unauthorized access to our systems, or interfere with other users' access to the services.",
  },
  {
    title: "Intellectual property",
    content:
      "The Mantsu platform, including its original content, features, and functionality, is owned by Mantsu and protected by international copyright, trademark, and other intellectual property laws. Your data and the applications you build using our platform remain your property.",
  },
  {
    title: "Payment and billing",
    content:
      "Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days' written notice. Continued use of the platform after a price change constitutes acceptance of the new pricing.",
  },
  {
    title: "Service availability",
    content:
      "We strive to maintain high availability of our services as outlined in your plan's SLA. However, we do not guarantee uninterrupted access and may perform scheduled maintenance with reasonable notice. We are not liable for any downtime or service interruptions beyond our control.",
  },
  {
    title: "Limitation of liability",
    content:
      "To the maximum extent permitted by law, Mantsu shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services, even if we have been advised of the possibility of such damages.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate the agreement at any time with 30 days' written notice. Upon termination, your right to use the platform ceases immediately. We will provide a reasonable period for you to export your data before permanently deleting it from our systems.",
  },
  {
    title: "Changes to terms",
    content:
      "We reserve the right to modify these terms at any time. Material changes will be communicated via email or through the platform at least 30 days before taking effect. Your continued use of the services after changes take effect constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="px-4 pt-12 pb-10 md:px-8 md:pt-16 md:pb-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              // Legal
            </p>
            <h1 className="mt-4 font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              Terms of Service
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
              These Terms of Service govern your access to and use of the Mantsu
              platform and services. Please read them carefully before using our
              platform.
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
                If you have any questions about these terms, please contact us at
                legal@mantsu.com.
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
