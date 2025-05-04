// components/TechStackSection.jsx
import techStack from '../../../data/techStack';


export default function TechStackSection() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-4 rounded-xl hover:shadow-lg transition duration-300"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
            <p className="text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
