import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    items: ["javaScript", "TypeScript", "Tailwind CSS","React", "Next.js"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-8 h-8 text-green-600" />,
    items: [ "Python", "Flask", "Django"]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8 text-purple-600" />,
    items: ["PostgreSQL", "MongoDB", "MySQL","AppWrite"]
  },
  {
    category: "Other Skills",
    icon: <Code2 className="w-8 h-8 text-orange-600" />,
    items: ["Git","Agile,Scrum","English","German"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="ml-3 text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}