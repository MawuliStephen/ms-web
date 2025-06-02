import React from 'react';
import { Mail, Phone, LocateIcon, Link as LinkIcon } from 'lucide-react';
// import preambleData from '@/data/cv/preamble.json'; // adjust the path as needed
import preambleData  from '../../../../data/cv/data.json'


type PreambleData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin?: string;
  summary: string;
};

type Props = {
  activeFilter: 'tech' | 'marketing' | 'all';
};

export const Preamble = ({ activeFilter }: Props) => {
  const data: PreambleData = preambleData.preamble[activeFilter];

  if (!data) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-foreground">{data.name}</h2>
      <p className="text-lg text-muted-foreground">{data.title}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        {data.email && (
          <a href={`mailto:${data.email}`} className="flex items-center gap-2 text-primary">
            <Mail className="h-5 w-5" />
            {data.email}
          </a>
        )}
        {data.phone && (
          <a href={`tel:${data.phone}`} className="flex items-center gap-2 text-primary">
            <Phone className="h-5 w-5" />
            {data.phone}
          </a>
        )}
        {data.location && (
          <span className="flex items-center gap-2 text-primary">
            <LocateIcon className="h-5 w-5" />
            {data.location}
          </span>
        )}
        {data.portfolio && (
          <a
            href={data.portfolio.startsWith('http') ? data.portfolio : `https://${data.portfolio}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary"
          >
            <LinkIcon className="h-5 w-5" />
            {data.portfolio.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
      <p className="pt-4 text-foreground/90">{data.summary}</p>
    </div>
  );
};


// import React from 'react';
// import { Mail, Phone, LocateIcon, Link as LinkIcon } from 'lucide-react';

// type PreambleData = {
//   name: string;
//   title: string;
//   email: string;
//   phone: string;
//   location: string;
//   portfolio: string;
//   summary: string;
// };

// type Props = {
//   activeFilter: 'tech' | 'marketing' | 'all';
//   preamble: { [key: string]: PreambleData };
// };

// export const Preamble = ({ activeFilter, preamble }: Props) => {
//   const data = preamble[activeFilter];

//   if (!data) return null;

//   return (
//     <div className="space-y-4">
//       <h2 className="text-3xl font-bold text-foreground">{data.name}</h2>
//       <p className="text-lg text-muted-foreground">{data.title}</p>
//       <div className="flex flex-wrap gap-4 pt-2">
//         {data.email && (
//           <a href={`mailto:${data.email}`} className="flex items-center gap-2 text-primary">
//             <Mail className="h-5 w-5" />
//             {data.email}
//           </a>
//         )}
//         {data.phone && (
//           <a href={`tel:${data.phone}`} className="flex items-center gap-2 text-primary">
//             <Phone className="h-5 w-5" />
//             {data.phone}
//           </a>
//         )}
//         {data.location && (
//           <span className="flex items-center gap-2 text-primary">
//             <LocateIcon className="h-5 w-5" />
//             {data.location}
//           </span>
//         )}
//         {data.portfolio && (
//           <a
//             href={data.portfolio}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-primary"
//           >
//             <LinkIcon className="h-5 w-5" />
//             {data.portfolio.replace(/^https?:\/\//, '')}
//           </a>
//         )}
//       </div>
//       <p className="pt-4 text-foreground/90">{data.summary}</p>
//     </div>
//   );
// };


// // export const Preamble;


// // import React from 'react';
// // import { Mail, Phone, LocateIcon, Link as LinkIcon } from 'lucide-react';

// // type PreambleData = {
// //   name: string;
// //   title: string;
// //   email: string;
// //   phone: string;
// //   location: string;
// //   portfolio: string;
// //   summary: string;
// // };

// // export const Preamble = ({ data }: { data: PreambleData }) => {
// //   return (
// //     <div className="space-y-4">
// //       <h2 className="text-3xl font-bold text-foreground">{data.name}</h2>
// //       <p className="text-lg text-muted-foreground">{data.title}</p>
// //       <div className="flex flex-wrap gap-4 pt-2">
// //         <a href={`mailto:${data.email}`} className="flex items-center gap-2 text-primary">
// //           <Mail className="h-5 w-5" />
// //           {data.email}
// //         </a>
// //         <a href={`tel:${data.phone}`} className="flex items-center gap-2 text-primary">
// //           <Phone className="h-5 w-5" />
// //           {data.phone}
// //         </a>
// //         <span className="flex items-center gap-2 text-primary">
// //           <LocateIcon className="h-5 w-5" />
// //           {data.location}
// //         </span>
// //         <a href={data.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary">
// //           <LinkIcon className="h-5 w-5" />
// //           {data.portfolio}
// //         </a>
// //       </div>
// //       <p className="pt-4 text-foreground/90">{data.summary}</p>
// //     </div>
// //   );
// // };


// // // // components/preamble.tsx
// // // import React from 'react';
// // // import { Mail, Phone, LocateIcon, Link as LinkIcon } from 'lucide-react';


// // // import data from '../../../../data/cv/data.json'

// // // export const Preamble = () => {
// // //   const { preamble } = data;
// // //   return (
// // //     <div className="space-y-4">
// // //       <h2 className="text-3xl font-bold text-foreground"> {preamble.name}</h2>
// // //       <p className="text-lg text-muted-foreground">
// // //         {preamble.title}
// // //       </p>
// // //       <div className="flex flex-wrap gap-4 pt-2">
// // //         <a href={`mailto:${preamble.email}`} className="flex items-center gap-2 text-primary">
// // //           <Mail className="h-5 w-5" />
// // //           {preamble.email}
// // //         </a>
// // //         <a href={`tel:${preamble.phone}`} className="flex items-center gap-2 text-primary">
// // //           <Phone className="h-5 w-5" />
// // //           {preamble.phone}
// // //         </a>
// // //         <span className="flex items-center gap-2 text-primary">
// // //           <LocateIcon className="h-5 w-5" />
// // //           {preamble.location}
// // //         </span>

// // //         {/* <a href={preamble.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary">
// // //   <LinkedIn className="h-5 w-5" />
// // //   {preamble.linkedin}
// // // </a> */}

// // //         <a href={preamble.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary">
// // //           <LinkIcon className="h-5 w-5" />
// // //           {preamble.portfolio}
// // //         </a>





// // //       </div>
// // //       <p className="pt-4 text-foreground/90">
// // //         {preamble.summary}
// // //       </p>
// // //     </div>
// // //   );
// // // };