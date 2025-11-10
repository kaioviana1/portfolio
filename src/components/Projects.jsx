import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'JWT'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management System',
      description:
        'Sistema de gerenciamento de tarefas com autenticação, drag-and-drop e notificações em tempo real.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['TypeScript', 'React', 'Express', 'Sequelize'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Dashboard para análise de métricas de redes sociais com gráficos interativos e relatórios exportáveis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'JWT'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description:
        'Plataforma de blog com editor rich text, sistema de comentários e categorização de posts.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      tags: ['JavaScript', 'Express', 'MySQL', 'Sequelize'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Real-time Chat Application',
      description:
        'Aplicação de chat em tempo real com salas privadas, emojis e compartilhamento de arquivos.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'WebSocket', 'JWT'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'API REST Authentication',
      description:
        'API RESTful completa com autenticação JWT, refresh tokens e controle de permissões.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Node.js', 'Express', 'JWT', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em
          diferentes tecnologias
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
