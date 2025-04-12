'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <p className="text-lg mb-4">
        By using Tube Improve, you agree to these terms.
      </p>
      <p className="text-md">
        Use of this tool is at your own risk. We are not responsible for any
        outcomes resulting from the use of suggested titles or descriptions.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

