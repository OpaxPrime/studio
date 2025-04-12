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
      <p className="text-md mb-4">
        We do not collect any personal information.
      </p>
      <p className="text-md mb-4">
        We do not use cookies or any other tracking technologies.
      </p>
      <p className="text-md mb-4">
        We do not share your information with any third parties.
      </p>
      <p className="text-md mb-4">
        We are committed to protecting your privacy.
      </p>
      <p className="text-md mb-4">
        If you have any questions or concerns about our privacy policy, please contact us.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

