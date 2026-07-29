import React from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="badge px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full font-medium mb-4">
        AWS Certified Solutions Architect
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mb-6">
        Automating pipelines & scaling secure cloud architecture.
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mb-8">
        I'm a DevOps Engineer specializing in container orchestration, infrastructure as code, and continuous deployment workflows.
      </p>
      <div className="flex gap-4">
        <a href="/projects" className="btn bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          View Projects
        </a>
        <a href="/contact" className="btn border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          Get in Touch
        </a>
      </div>
    </main>
  );
}
