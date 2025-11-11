import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  pt: {
    // Header
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    // Hero
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Full Stack',
      age: '25 anos | Transformando ideias em código',
      viewProjects: 'Ver Projetos',
      contact: 'Contato',
    },
    // About
    about: {
      title: 'Sobre',
      titleHighlight: 'Mim',
      description: 'Desenvolvedor Full Stack apaixonado por criar soluções web modernas e eficientes. Com experiência em tecnologias front-end e back-end, busco sempre entregar produtos de alta qualidade.',
      cards: {
        experience: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        technologies: 'Tecnologias',
      },
    },
    // Skills
    skills: {
      title: 'Minhas',
      titleHighlight: 'Habilidades',
      description: 'Tecnologias e ferramentas que domino para criar soluções completas',
    },
    // Projects
    projects: {
      title: 'Meus',
      titleHighlight: 'Projetos',
      description: 'Alguns dos projetos que desenvolvi ao longo da minha carreira',
      demo: 'Ver Demo',
      code: 'Ver Código',
      project1: {
        title: 'E-commerce Platform',
        description: 'Plataforma completa de e-commerce com carrinho, pagamento e painel admin',
      },
      project2: {
        title: 'Task Manager',
        description: 'Sistema de gerenciamento de tarefas com autenticação e colaboração em tempo real',
      },
      project3: {
        title: 'API RESTful',
        description: 'API robusta com Node.js, Express e MySQL para gerenciamento de usuários',
      },
    },
    // Contact
    contact: {
      title: 'Entre em',
      titleHighlight: 'Contato',
      description: 'Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade!',
      info: 'Informações de Contato',
      email: 'Email',
      phone: 'Telefone',
      location: 'Localização',
      locationValue: 'São Paulo, Brasil',
      social: 'Redes Sociais',
      form: {
        title: 'Envie uma Mensagem',
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        email: 'Email',
        emailPlaceholder: 'seu@email.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Assunto da mensagem',
        message: 'Mensagem',
        messagePlaceholder: 'Digite sua mensagem...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.',
        error: '❌ Erro ao enviar mensagem. Tente novamente.',
      },
    },
    // Footer
    footer: {
      description: 'Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e eficientes. Transformando ideias em código.',
      quickLinks: 'Links Rápidos',
      contactTitle: 'Contato',
      madeWith: 'Feito com',
      and: 'e',
      rights: 'Todos os direitos reservados',
    },
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    // Hero
    hero: {
      greeting: 'Hello, I am',
      role: 'Full Stack Developer',
      age: '25 years old | Turning ideas into code',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    // About
    about: {
      title: 'About',
      titleHighlight: 'Me',
      description: 'Full Stack Developer passionate about creating modern and efficient web solutions. With experience in front-end and back-end technologies, I always seek to deliver high-quality products.',
      cards: {
        experience: 'Years of Experience',
        projects: 'Completed Projects',
        technologies: 'Technologies',
      },
    },
    // Skills
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      description: 'Technologies and tools I master to create complete solutions',
    },
    // Projects
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      description: 'Some of the projects I developed throughout my career',
      demo: 'View Demo',
      code: 'View Code',
      project1: {
        title: 'E-commerce Platform',
        description: 'Complete e-commerce platform with cart, payment and admin panel',
      },
      project2: {
        title: 'Task Manager',
        description: 'Task management system with authentication and real-time collaboration',
      },
      project3: {
        title: 'RESTful API',
        description: 'Robust API with Node.js, Express and MySQL for user management',
      },
    },
    // Contact
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      description: 'Have a project in mind? Let\'s talk and turn your ideas into reality!',
      info: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'São Paulo, Brazil',
      social: 'Social Media',
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Type your message...',
        send: 'Send Message',
        sending: 'Sending...',
        success: '✅ Message sent successfully! I will contact you soon.',
        error: '❌ Error sending message. Please try again.',
      },
    },
    // Footer
    footer: {
      description: 'Full Stack Developer passionate about creating innovative and efficient digital solutions. Turning ideas into code.',
      quickLinks: 'Quick Links',
      contactTitle: 'Contact',
      madeWith: 'Made with',
      and: 'and',
      rights: 'All rights reserved',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
