import { Code, Palette, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a passionate developer with 5 years of experience in creating web applications.
              My journey in tech started with curiosity and evolved into a career filled with
              innovative solutions and continuous learning.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Code className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Clean Code</h3>
                  <p className="text-gray-600">Writing maintainable and scalable code is my priority</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Palette className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Modern Design</h3>
                  <p className="text-gray-600">Creating beautiful and intuitive user interfaces</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Problem Solving</h3>
                  <p className="text-gray-600">Finding elegant solutions to complex problems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
                alt="Coding workspace"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}