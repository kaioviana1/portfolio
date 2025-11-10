import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSequelize,
} from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-6xl" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      level: 95,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-6xl" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      level: 90,
    },
    {
      name: 'React',
      icon: <SiReact className="text-6xl" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      level: 92,
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs className="text-6xl" />,
      color: 'text-green-600',
      bgColor: 'bg-green-600/10',
      level: 88,
    },
    {
      name: 'Express',
      icon: <SiExpress className="text-6xl" />,
      color: 'text-gray-700 dark:text-gray-300',
      bgColor: 'bg-gray-700/10',
      level: 85,
    },
    {
      name: 'Sequelize',
      icon: <SiSequelize className="text-6xl" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      level: 80,
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="text-6xl" />,
      color: 'text-blue-700',
      bgColor: 'bg-blue-700/10',
      level: 87,
    },
    {
      name: 'JWT',
      icon: <MdSecurity className="text-6xl" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
      level: 83,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Minhas <span className="gradient-text">Habilidades</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar aplicações modernas e escaláveis
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} p-6 rounded-xl card-hover group relative overflow-hidden`}
            >
              <div className="text-center">
                <div className={`${skill.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {skill.name}
                </h3>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Sempre Aprendendo
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A tecnologia está em constante evolução, e eu também. Sempre em busca de novos
            conhecimentos e melhores práticas para entregar soluções de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
