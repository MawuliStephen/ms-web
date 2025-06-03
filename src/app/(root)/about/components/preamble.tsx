import React from 'react';
import { Mail, Phone, LocateIcon, Linkedin, Link as LinkIcon } from 'lucide-react';
// import preambleData from '@/data/cv/preamble.json'; // adjust the path as needed
import preambleData from '../../../../data/cv/data.json'


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

        

        {data.linkedin && (
          <a
            href={data.linkedin.startsWith('http') ? data.linkedin : `https://www.linkedin.com/in/${data.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary"
          >
            <Linkedin className="h-5 w-5" />
            {data.linkedin.replace(/^https?:\/\//, '')}
          </a>
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
