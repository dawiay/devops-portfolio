import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Lecturer',
      company: 'Ambo University',
      location: 'Ambo,Ethiopia',
      period: 'June 2019 - 2022',
      description: 'Prepare and deliver lectures, tutorials, and laboratory sessions in computer science.',
      achievements: [
        'Programming (Python, Java, C++, etc.),Data Structures and Algorithms',
        'Advise students on academic progress and career development',
        'Artificial Intelligence / Machine Learning, Computer Networks',
        'Publish papers in journals or present findings at conferences.'
      ],
      technologies: ['Sql', 'Java', 'C++', 'C#']
    },
          {
        title: 'Senior System Administrator',
        company: 'Siinqee Bank',
        location: 'Addis Ababa Ethiopia',
        period: 'July 2023 - 2024',
        description: `
`,
        achievements: [
          'Install, configure, and maintain operating systems (Windows Server, Linux, macOS).',
          'Monitor server and network health using tools like Nagios, Zabbix, Prometheus, or Grafana.',
          'Configured HA infrastructure with Hardware RAID 1+0, XCP-ng hypervisor, and WireGuard VPN',
          'Develop and maintain data backup and recovery strategies.'
        ],
        technologies: ['RKE2', 'Rancher', 'Istio', 'Keycloak', 'XCP-ng', 'WireGuard']
      },
    {
      title: 'Senior DevOps Engineer ',
      company: 'Atlas Computer Technology',
      location: 'Addis Ababa',
      period: 'April 2024 - Mar 2025',
      description: 'Architected scalable cloud-native infrastructure and deployment pipelines for AI/ML workloads.',
      achievements: [
        'Built RKE2 Kubernetes clusters with Terraform/Terragrunt; 40% faster deployments',
        'Managed NVIDIA GPU-enabled clusters for n8n, Langfuse, LibreChat, ClickHouse',
        'Streamlined Helm-based deployments with shared-stacks across 5+ environments',
        'Integrated Teleport for secure, identity-aware cluster access; reduced incidents by 60%',
        'Designed observability with Prometheus, Grafana, and Mimir for 99.9% visibility',
        'Led secret injection automation via Lade and 1Password (zero-trust)'
      ],
      technologies: ['RKE2', 'Terraform', 'Terragrunt', 'Helm', 'Teleport', 'Prometheus', 'Grafana', 'Mimir']
    },
    {
      title: 'Project Manager',
      company: 'Atlas Computer Technology',
      location: 'Ethiopia',
      period: 'Mar 2025 - Present',
      description: 'Delivered More than 6 Projects across  banks and governmental projects.',
      achievements: [
        'Monitor project progress: track schedule, budget, risks, issues, dependencies; provide regular status updates to stakeholders.',
        'Coordinate cross-functional teams (IT, infrastructure, operations, vendors) to execute the project on time, within budget, and meeting quality standards.',
        'Manage infrastructure deployments, system upgrades, software implementations, or digital transformation projects.',
        'Track project progress using Agile or Waterfall methodologies.'
      ],
      technologies: ['Scrum', 'Agile', 'PM', 'Jira', 'ScrumWise', 'MySQL', ]
    },
    
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in DevOps and cloud engineering, building scalable solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-900 rounded-xl p-6 card-hover border border-gray-800">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-primary-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-300 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                      {exp.location && (
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    )}

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 text-gray-200 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

