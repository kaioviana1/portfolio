import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: 'Desenvolvimento',
      description: 'Criação de aplicações web modernas e responsivas com as melhores práticas.',
    },
    {
      icon: <FaLaptopCode className="text-4xl text-secondary" />,
      title: 'Full Stack',
      description: 'Experiência completa em front-end e back-end para soluções completas.',
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Performance',
      description: 'Foco em otimização e performance para aplicações rápidas e eficientes.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Sobre <span className="gradient-text">Mim</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Desenvolvedor Full Stack Apaixonado por Tecnologia
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Com 25 anos e uma paixão genuína por tecnologia, dedico-me a criar soluções
              digitais inovadoras e eficientes. Minha jornada no desenvolvimento web me
              permitiu dominar tanto o front-end quanto o back-end, sempre buscando
              aprender e evoluir.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Especializado em JavaScript/TypeScript e React no front-end, Node.js e
              Express no back-end, com experiência em bancos de dados relacionais e
              autenticação segura. Busco sempre criar experiências de usuário excepcionais
              e código limpo e manutenível.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                Team Player
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Fast Learner
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&h=800&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover"
            >
              <div className="mb-4">{card.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {card.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
