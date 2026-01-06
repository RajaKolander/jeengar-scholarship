'use client';

export default function Register() {
  return (
    <div className="p-10 text-center">

      <h2 className="text-xl font-bold mb-6">
        Scholarship Registration 2026
      </h2>

      <p className="mb-6">
        Click below to open Google Form
      </p>

      <a
        href="https://forms.gle/YOUR_FORM_LINK"
        className="bg-black text-white px-6 py-3 rounded-2xl"
      >
        Open Registration Form
      </a>

      <div className="mt-10">
        <iframe
          src="https://docs.google.com/forms/d/e/YOUR_EMBED_LINK/viewform?embedded=true"
          width="100%"
          height="1200"
        ></iframe>
      </div>

    </div>
  );
}
