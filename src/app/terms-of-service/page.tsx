'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>

      <p className="text-lg mb-4">
        By using Tube Improve, you agree to these terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
      <p className="text-md mb-4">
        By accessing or using Tube Improve, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
      <p className="text-md mb-4">
        Tube Improve is an AI-powered tool designed to help you optimize your YouTube video titles for better SEO and engagement.
        We provide suggestions and recommendations based on our algorithms, but we do not guarantee any specific results.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Service</h2>
      <p className="text-md mb-4">
        You agree to use Tube Improve only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
      <p className="text-md mb-4">
        All content, trademarks, data, and other material on Tube Improve, including but not limited to software, text, graphics, logos, and images, are the intellectual property of Tube Improve or its licensors. You may not use, reproduce, or distribute any content from Tube Improve without our prior written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Conduct</h2>
      <p className="text-md mb-4">
        You agree not to:
        <ul className="list-disc pl-5">
          <li>Use Tube Improve to create, transmit, or promote content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
          <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
          <li>Interfere with or disrupt the service or servers or networks connected to the service, or disobey any requirements, procedures, policies, or regulations of networks connected to the service.</li>
          <li>Attempt to gain unauthorized access to any portion or feature of the service, or any other systems or networks connected to the service.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
      <p className="text-md mb-4">
        The service is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the service, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
      <p className="text-md mb-4">
        To the fullest extent permitted by applicable law, Tube Improve shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the service; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the service; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our service by any third party; or (e) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the service, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
      <p className="text-md mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Dispute Resolution</h2>
      <p className="text-md mb-4">
        Any dispute arising out of or relating to these Terms or the service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in San Francisco, California.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
      <p className="text-md mb-4">
        We reserve the right to modify or revise these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the service after any changes to these Terms constitutes your acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
      <p className="text-md mb-4">
        If you have any questions about these Terms, please contact us.
      </p>
      <p className="text-md mb-4">
        Email: <a href="mailto:support@tubeimprove.com">support@tubeimprove.com</a>
      </p>

      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
