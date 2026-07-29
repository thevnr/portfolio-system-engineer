import React from 'react';
import { CERTIFICATIONS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-600 mb-6">
        Hi, I'm <strong>Jayasankar P</strong>. I am a DevOps and Senior Systems Engineer focused on building robust cloud-native infrastructure, optimizing delivery pipelines, and keeping production workflows highly reliable.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        With a B.Sc. in Electronics and an <strong>AWS Solutions Architect Associate</strong> certification, my expertise spans across container orchestration with Docker/Kubernetes, comprehensive system observation using Zabbix/Nagios, and complete infrastructure automation.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Milestones</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li><strong>Met Clouds Technologies:</strong> Maintained enterprise CI/CD workflows and optimized remote provisioning mechanics.</li>
        <li><strong>Inavan India Technologies:</strong> Built Proxmox infrastructure networks, automated backup routines, and spearheaded zero-downtime server migrations.</li>
        <li><strong>Nelux Technologies:</strong> Managed core RHEL/CentOS environments, server hardening configurations, and malware remediation tracks.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Certifications</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 font-medium">
        {CERTIFICATIONS.map((cert, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-600">✓</span> {cert}
          </li>
        ))}
      </ul>
    </div>
  );
}
