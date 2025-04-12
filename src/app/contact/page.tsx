'use client';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        Have questions or feedback? We'd love to hear from you!
      </p>
      <p className="text-md">
        Email: <a href="mailto:support@tubeimprove.com">support@tubeimprove.com</a>
      </p>
    </div>
  );
}
