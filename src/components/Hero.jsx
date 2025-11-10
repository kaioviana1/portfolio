import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [displayName, setDisplayName] = useState('');
  const fullName = 'Kaio Viana';
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseDuration = 10000; // 10 segundos de pausa

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullName.length) {
        setDisplayName(fullName.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullName.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex > 0) {
        setDisplayName(fullName.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="section-container text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Olá, eu sou <span className="gradient-text">{displayName}<span className="animate-pulse">|</span></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 animate-slide-up delay-100">
            Desenvolvedor Full Stack
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-500 mb-8 animate-slide-up delay-200">
            25 anos | Transformando ideias em código
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-up delay-300">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:kaio@example.com"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <div className="flex justify-center space-x-4 animate-slide-up delay-400">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary dark:text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contato
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about"
        >
          <FaArrowDown className="text-primary text-3xl" />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float delay-1000"></div>
    </section>
  );
};

export default Hero;
