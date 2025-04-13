'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        Have questions or feedback? We'd love to hear from you!
      </p>
      <p className="text-md mb-4">
        Email: <a href="mailto:tubeimproveai@gmail.com">tubeimproveai@gmail.com</a>
      </p>
      <p className="text-md mb-4">
        We typically respond to emails within 24-48 hours.
      </p>
      <p className="text-md mb-4">
        You can also reach us on social media:
      </p>
      <ul className="list-none pl-0 mb-4">
        <li>
          <a href="https://instagram.com/tubeimproveai" target="_blank" rel="noopener noreferrer">Instagram: @tubeimproveai</a> Instagram page name: tubeimproveai
        </li>
        <li>
          YouTube: @TubeImprove
        </li>
      </ul>
      <p className="text-md mb-4">
        We appreciate your interest in Tube Improve and look forward to hearing from you!
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

