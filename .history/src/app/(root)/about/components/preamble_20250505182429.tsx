// components/preamble.tsx
import { , } from 'lucide-react';
import React from 'react';

export const Preamble = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-foreground">John Doe</h2>
      <p className="text-lg text-muted-foreground">
        Full Stack Developer & Digital Marketing Specialist
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a href="mailto:john@example.com" className="flex items-center gap-2 text-primary">
          <Mail className="h-5 w-5" />
          john@example.com
        </a>
        <a href="tel:+1234567890" className="flex items-center gap-2 text-primary">
          <Phone className="h-5 w-5" />
          +1 (234) 567-890
        </a>
      </div>
      <p className="pt-4 text-foreground/90">
        Passionate technologist with 8+ years of experience building scalable web applications 
        and data-driven marketing campaigns. Specializing in bridging the gap between 
        technical implementation and business objectives.
      </p>
    </div>
  );
};