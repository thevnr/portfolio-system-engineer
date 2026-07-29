import React from 'react';
import { CERTIFICATIONS } from '@/lib/constants';

export default function Certifications() {
  return (
    <section className="py-12 bg-gray-50 rounded-xl my-8 px-6">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Professional Credentials</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded">🪪</div>
            <p className="text-sm font-semibold text-gray-700 mt-1">{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
