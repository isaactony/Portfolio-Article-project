import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Isaac Tonyloi
            </h3>
            <p className="text-gray-400">
              Building robust backend solutions and sharing knowledge through technical writing.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your@email.com" className="hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Isaac Tonyloi
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}