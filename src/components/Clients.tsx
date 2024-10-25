import { CheckCircle } from 'lucide-react';

const clients = [
  {
    name: "TechCorp Solutions",
    description: "Developed microservices architecture for their e-commerce platform",
    technologies: ["Node.js", "MongoDB", "Redis"],
    type: "Backend Development"
  },
  {
    name: "DataFlow Systems",
    description: "Implemented real-time data processing pipeline",
    technologies: ["Python", "Apache Kafka", "PostgreSQL"],
    type: "Backend Development"
  },
  {
    name: "CloudScale Inc",
    description: "Created technical documentation for their cloud infrastructure",
    technologies: ["AWS", "Kubernetes", "Terraform"],
    type: "Technical Writing"
  },
  {
    name: "DevOps Weekly",
    description: "Regular contributor for backend architecture articles",
    technologies: ["System Design", "Best Practices", "Tutorial Writing"],
    type: "Technical Writing"
  }
];

export default function Clients() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Past Clients</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{client.name}</h3>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm mt-2">
                    {client.type}
                  </span>
                </div>
                <CheckCircle className="text-green-500" />
              </div>
              
              <p className="text-gray-600 mb-4">{client.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {client.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}