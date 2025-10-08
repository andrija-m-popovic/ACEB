
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alternate' | 'green' | 'blue';
  size?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'default',
  size = 'md'
}) => {
  const backgrounds = {
    default: 'bg-bg',
    alternate: 'bg-white',
    green: 'bg-green text-white',
    blue: 'bg-blue text-white'
  };
  
  const sizes = {
    sm: 'py-xl',
    md: 'py-2xl',
    lg: 'py-3xl'
  };
  
  const classes = `${backgrounds[background]} ${sizes[size]} ${className}`;
  
  return (
    <section className={classes}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
