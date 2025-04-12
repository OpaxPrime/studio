'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <p className="text-md mb-4">
        We do not directly collect any personal information from you when you use Tube Improve.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <p className="text-md mb-4">
        Since we do not collect any personal information, we do not use your information for any purpose.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing of Your Information</h2>
      <p className="text-md mb-4">
        We do not share any personal information with third parties because we do not collect any.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
      <p className="text-md mb-4">
        We take reasonable measures to protect the information we do not collect from unauthorized access, use, or disclosure.
        These measures are primarily focused on ensuring the security of our systems and infrastructure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
      <p className="text-md mb-4">
        As we do not collect any personal data, there are no specific rights for you to exercise.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
      <p className="text-md mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p className="text-md mb-4">
        If you have any questions or concerns about our privacy policy, please contact us.
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
