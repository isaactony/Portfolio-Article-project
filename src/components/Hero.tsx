import { ArrowDown, Server, Database, FileCode } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 animate-float-slow">
          <Server className="text-purple-200 w-24 h-24" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Database className="text-blue-200 w-24 h-24" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float">
          <FileCode className="text-purple-100 w-16 h-16" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-24 text-center relative">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Isaac Tonyloi
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-slideUp">
            Backend Developer & Technical Writer
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slideUp delay-200">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:scale-105 transition-transform">Node.js</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:scale-105 transition-transform">Python</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:scale-105 transition-transform">AWS</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:scale-105 transition-transform">Technical Writing</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-slideUp delay-300">
            Architecting robust backend solutions and crafting clear, comprehensive technical documentation.
            Turning complex systems into maintainable code and accessible knowledge.
          </p>
          <div className="flex justify-center space-x-4 animate-slideUp delay-400">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
}