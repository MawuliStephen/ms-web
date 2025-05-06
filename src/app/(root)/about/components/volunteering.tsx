// components/volunteering.tsx
import React from 'react';

export const Volunteering = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Community Involvement</h2>
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between">
            <h3 className="font-medium text-foreground">Coding Mentor</h3>
            <span className="text-muted-foreground">2019 - Present</span>
          </div>
          <p className="text-foreground/90">Local Youth Tech Initiative</p>
          <p className="text-sm text-muted-foreground">
            Mentored 20+ students in web development fundamentals
          </p>
        </div>
      </div>
    </div>
  );
};