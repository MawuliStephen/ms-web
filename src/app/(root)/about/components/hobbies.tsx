// components/hobbies.tsx
import React from 'react';
import data from '../../../../data/cv/data.json'

export const Hobbies = () => {
  const {hobbies} = data;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Interests</h2>
  <div className="flex flex-wrap gap-3">
        {hobbies.map(hobby => (
          <span key={hobby} className="px-3 py-1 bg-surface rounded-full">
            {hobby}
          </span>
        ))}
      </div>
    </div>
  );
};