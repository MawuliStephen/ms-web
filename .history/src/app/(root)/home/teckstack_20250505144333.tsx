// components/TechStackSection.jsx
import techStack from '../../../data/techStack';


export default function TechStackSection() {
  return (
    <section className="py-12 px-4 md:px-12  dark:bg-dark-background text-gray-500 dark:text-foreground transition-colors duration-300">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col  text-muted-foreground '>
          <hr />
          <hr />
          <hr />
        </div>


        <div className="flex flex-col items-center mb-8">
          {/* <h1 className="text-4xl font-bold text-center mb-2">My Tech Stack</h1> */}
          <h2 className="text-3xl font-bold text-center my-10">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
            I am proficient in a variety of technologies and tools that help me build efficient and scalable solutions.
          </p>

        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center ">

          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center  gap-2 p-4  hover:shadow-lg transition duration-300"
            >
              <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
              <p className="text-sm font-medium ">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
