
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  as?: 'button' | 'a';
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  as = href ? 'a' : 'button',
  target,
  rel,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition rounded focus-outline';
  
  const variants = {
    primary: 'bg-blue text-white hover:shadow-hover hover:bg-blue-deep',
    outline: 'border-2 border-blue text-blue bg-white hover:bg-blue hover:text-white',
    ghost: 'text-blue hover:bg-blue hover:bg-opacity-10'
  };
  
  const sizes = {
    sm: 'px-md py-sm text-sm',
    md: 'px-lg py-md',
    lg: 'px-xl py-lg text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (as === 'a' && href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target={target} 
        rel={rel}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
