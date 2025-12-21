import { SectionLayout, SectionHeader } from '../components/navigations/section-layout';
import techStack from '../../../data/techStack';
// import { TechCard } from './TechCard';

function TechCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; logo: string }[];
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((tech) => (
          <TechCard key={tech.name} name={tech.name} logo={tech.logo} />
        ))}
      </div>
    </div>
  );
}

const sortByName = <T extends { name: string }>(items: T[]) =>
  [...items].sort((a, b) => a.name.localeCompare(b.name));

export default function TechStackSection() {
  const frontend = sortByName(techStack.filter(t => t.category === 'frontend'));
  const backend = sortByName(techStack.filter(t => t.category === 'backend'));
  const databases = sortByName(techStack.filter(t => t.category === 'databases'));
  const tools = sortByName(techStack.filter(t => t.category === 'tools'));

  return (
    <SectionLayout id="tech-stack">
      <SectionHeader
        title="Tech Stack"
        description="Technologies and tools I use to build scalable and efficient solutions."
      />

      <div className="space-y-12">
        <TechCategory title="Frontend" items={frontend} />
        <TechCategory title="Backend" items={backend} />
        <TechCategory title="Databases" items={databases} />
        <TechCategory title="Tools" items={tools} />
      </div>
    </SectionLayout>
  );
}


// import { SectionLayout, SectionHeader } from '../components/navigations/section-layout';
// import techStack from '../../../data/techStack';
import Image from 'next/image';

function TechCard({ name, logo }: { name: string; logo: string }) {
    return (
        <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <Image
                src={logo}
                alt={name}
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-12 object-contain"
                loading="lazy"
            />
            <p className="text-sm font-medium text-foreground">{name}</p>
        </div>
    );
}

// export default function TechStackSection() {
//     return (
//         <SectionLayout id="tech-stack">
//             <SectionHeader
//                 title="Tech Stack"
//                 description="Technologies and tools I use to build scalable and efficient solutions."
//             />

//             <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//                 {techStack.map((tech) => (
//                     <TechCard
//                         key={tech.name} // ✅ stable key
//                         name={tech.name}
//                         logo={tech.logo}
//                     />
//                 ))}
//             </div>
//         </SectionLayout>
//     );
// }
