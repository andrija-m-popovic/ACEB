
import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className = ''
}) => {
  const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};
  
  return (
    <section 
      className={`bg-green text-white py-3xl ${className}`}
      style={backgroundStyle}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-lg">
            {title}
          </h1>
          
          {subtitle && (
            <p className="body-large mb-xl opacity-90">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-wrap gap-md justify-center">
            {primaryCta && (
              <Button
                href={primaryCta.href}
                variant="primary"
                size="lg"
                className="bg-white text-green hover:bg-lime hover:text-white"
              >
                {primaryCta.text}
              </Button>
            )}
            
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
