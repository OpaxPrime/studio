'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">About Tube Improve</h1>
      <p className="text-lg mb-4">
        Tube Improve is an AI-powered tool designed to help you optimize your
        YouTube video titles for better SEO and engagement.
      </p>
      <p className="text-md mb-4">
        Our mission is to empower content creators with the insights they need to
        reach a wider audience and grow their channels.
      </p>
      <p className="text-md mb-4">
        We believe that with the right tools and knowledge, anyone can succeed on YouTube.
      </p>
      <p className="text-md mb-4">
        Our AI algorithms analyze your original title and suggest improved versions that are more likely to attract viewers and rank higher in search results.
      </p>
      <p className="text-md mb-4">
        We also provide SEO-driven descriptions and hashtags to further enhance your video's visibility.
      </p>
      <p className="text-md mb-4">
        Our team is constantly working to improve our tool and provide the best possible experience for our users.
      </p>
      <p className="text-md mb-4">
        We are committed to helping you achieve your YouTube goals.
      </p>
      <p className="text-md mb-4">
        Thank you for choosing Tube Improve!
      </p>
      <p className="text-md mb-4">
        If you have any questions or feedback, please don't hesitate to contact us.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

