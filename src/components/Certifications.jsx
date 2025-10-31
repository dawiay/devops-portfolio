import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
	{
		title: 'Linux Fundamental',
		issuer: 'LinkedIn Learning',
		issued: 'Apr 2025',
		expires: '',
		skills: ['Security Fundamentals,Storage and Disk Management,Shell Scripting Basics,Networking Basics,Process and Job Management']
	},
	{
		title: 'F5 Load Balancer',
		issuer: 'LinkedIn Learning',
		issued: 'Mar 2025',
		expires: 'May 2028',
		skills: ['F5 BIG-IP ,Networking & Protocols,iRules & Scripting,Automation & Integration']
	},
	{
		title: 'Build a CI/CD Pipeline',
		issuer: 'LinkedIn Learning',
		issued: 'Mar 2025',
		expires: '',
		credentialId: '',
		skills: ['DevOps', 'Continuous Integration & Delivery (CI/CD)']
	},
	{
		title: 'DevOps Foundations: Site Reliability Engineering',
		issuer: 'LinkedIn Learning',
		issued: 'Mar 2025',
		expires: 'Jun 2030',
		skills: ['DevOps', 'Site Reliability Engineering (SRE)']
	}
]

function Certifications() {
	return (
		<section id="certifications" className="py-20 bg-black">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Selected credentials and focus areas
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{certifications.map((c) => (
						<div key={c.title + c.issued} className="bg-gray-900 rounded-lg p-6 shadow-md border border-gray-800 text-left">
							<div className="text-primary-400 text-sm font-semibold mb-1">{c.issuer}</div>
							<h3 className="font-semibold text-white">{c.title}</h3>
							<div className="text-gray-300 text-sm mt-1">
								Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ''}
							</div>
							{c.credentialId && (
								<div className="text-xs text-gray-400 mt-2 break-all">
									Credential ID: {c.credentialId}
								</div>
							)}
							{c.skills && c.skills.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-4">
									{c.skills.map((s) => (
										<span key={s} className="px-2 py-0.5 bg-gray-800 text-gray-200 rounded text-xs font-medium">{s}</span>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Certifications