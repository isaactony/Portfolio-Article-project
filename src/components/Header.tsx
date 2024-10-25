import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="hover:text-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your@email.com" className="hover:text-purple-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#home" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="nav-link-mobile" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}