'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <p className="text-lg mb-4">
        By using Tube Improve, you agree to these terms.
      </p>
      <p className="text-md mb-4">
        Use of this tool is at your own risk. We are not responsible for any
        outcomes resulting from the use of suggested titles or descriptions.
      </p>
      <p className="text-md mb-4">
        We do not guarantee any specific results from using our tool.
      </p>
      <p className="text-md mb-4">
        We reserve the right to modify or discontinue our tool at any time.
      </p>
      <p className="text-md mb-4">
        You are responsible for ensuring that your use of our tool complies with all applicable laws and regulations.
      </p>
      <p className="text-md mb-4">
        We are not liable for any damages arising from your use of our tool.
      </p>
      <p className="text-md mb-4">
        These terms are governed by the laws of the State of California.
      </p>
      <p className="text-md mb-4">
        If you do not agree to these terms, you may not use our tool.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

