import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Cloud, Container, Shield, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'F5 Load Balancer',
      description: 'Configure and manage F5 BIG-IP appliances for \' Siinqee Bank platform with secure, highly-available ,  and network overlays.',
      icon: Cloud,
      technologies: ['TMOS', 'TMM', 'iRules', 'iApps', 'iWorkflow', 'AS3', 'Monitors', ],
      features: [
        'Intelligent Load Balancing',
        'Application Security (WAF)',
        'Performance Optimization',
        'Comprehensive Analytics & Monitoring',
        'Session Persistence'
      ],
      github: '#',
      demo: '#',
      image: '🏛️'
    },
    {
      title: 'Enterprise SMS Gateway Backend',
      description: 'Scalable backend integrating with SMS Gateway for Android. Supports multi-device, multi-location, multi-SIM, and secure real-time webhooks with n8n.',
      icon: Cloud,
      technologies: ['Node.js', 'Express', 'MySQL', 'Axios', 'n8n', 'HMAC', 'Android Gateway', 'Docker'],
      features: [
        'Multi-device with sticky routing and auto-registration',
        'Multi-location and multi-SIM support with rotation policies',
        'Real-time webhooks to n8n with HMAC-SHA256 verification',
        'Full message lifecycle tracking and reply context preservation',
        'Secure API tokens and rate-limiting'
      ],
      github: '#',
      demo: '#',
      image: '📡'
    },
    {
      title: 'Oracle Exadata Database Machine',
      description: 'Successfully implemented and configured Oracle Exadata Database Machine to optimize database performance, scalability, and reliability for enterprise workloads.',
      technologies: ['Oracle Database 19c / 21c', 'ASM', 'SSD', 'Data Guard', 'SQL/PLSQL', 'RMAN', 'ExaCLI / DBMCLI', 'InfiniBand Networking'],
      features: [
        'High Performance',
        'Extreme Scalability',
        'High Availability & Fault Tolerance',
        'Hybrid Cloud Support',
        'Security and Data Protection'
      ],
      github: '#',
      demo: '#',
      image: '🏠'
    },
    {
      title: 'USSD & Mobile Banking Platforms (Multi-Bank)',
      description: 'Delivered high-availability mobile banking for Siinqee, Hijra, Wegagen and others with secure messaging, SSO, CI/CD, and observability.',
      icon: Container,
      technologies: ['Docker', 'Kubernetes', 'Nginx', 'ActiveMQ', 'WildFly', 'MySQL', 'Keycloak', 'Jenkins', 'ELK', 'Zabbix', 'Grafana'],
      features: [
        'Reverse proxy/load balancing and secure messaging (ActiveMQ)',
        'HA deployments with autoscaling and failover',
        'Jenkins pipelines for Maven apps; minutes-not-hours releases',
        'Centralized logging + dashboards (ELK, Zabbix, Grafana)',
        'SSO via Keycloak and heartbeat-based HA'
      ],
      github: '#',
      demo: '#',
      image: '🏦'
    },
    {
      title: 'Integrated Justice Court Management System (IJCMS) Project Lead',
      description: 'Integrated Justice Court Management System  designed to streamline and automate judicial processes.',
      icon: Shield,
      technologies: ['Java', 'Spring boot', 'Camunda', 'Reactjs', 'PostgreSQL', 'Shadcn', 'TailwindCss', ],
      features: [
        'Case Management',
        'Integrated Stakeholder Access',
        'Scheduling & Hearings Management',
        'Document & Evidence Management',
        'Reporting & Analytics'
      ],
      github: '#',
      demo: '#',
      image: '🧾'
    },
    {
      title: 'Mobile Banking Platform Modernization',
      description: 'Containerized Java-based mobile banking workloads and introduced CI/CD and centralized logging for enterprise financial services.',
      icon: Container,
      technologies: ['Docker', 'Kubernetes', 'Nginx', 'ActiveMQ', 'WildFly', 'MySQL', 'Jenkins', 'ELK'],
      features: [
        '99.95% uptime across critical banking services',
        'Jenkins pipelines reduced deploys from 4h to 15m',
        'Centralized logs with ELK and actionable alerts',
        'Hybrid cloud with cost optimization (~35%)'
      ],
      github: '#',
      demo: '#',
      image: '💳'
    },
    {
      title: 'Enterprise Resource Planning',
      description: 'Implemented and managed ERP systems to streamline finance, HR, supply chain, and production processes, improving operational efficiency and real-time reporting..',
      icon: BarChart3,
      technologies: ['PostgreSQL', 'Java', 'PHP', 'React', 'SSL/TLS', 'OAuth', 'Power BI', 'Python'],
      features: [
        'Centralized Data Management',
        'Human Resource Management (HRM)',
        'Finance & Accounting',
        'Customer Relationship Management (CRM)'
      ],
      github: '#',
      demo: '#',
      image: '🤖'
    },
    {
      title: 'Amhara Tourism System',
      description: 'Successfully deployed a responsive, fast, and user-friendly tourism management system that enhances the visibility of Amhara’s tourist destinations and supports regional tourism development through digital transformation.',
      icon: Shield,
      technologies: ['React.js', 'Tailwind CSS', 'Python', 'GitHub ', 'PostgreSQL'],
      features: [
        'Tourist Destination Directory',
        'Interactive Map Integration',
        'Multilingual Support',
        'Secure & Scalable Architecture'
      ],
      github: '#',
      demo: '#',
      image: '📥'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Work that reflects real impact across government, banking, and platform engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-lg overflow-hidden card-hover border border-gray-800"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{project.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="p-6 border-b border-gray-800">
                <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="p-6">
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <a
            href="https://github.com/dawiay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

