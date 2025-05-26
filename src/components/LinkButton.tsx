import { Link } from 'react-router-dom';

interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
}

function LinkButton({ href, text, className = '' }: LinkButtonProps) {
  // Determine if internal or external link
  const isExternal = href.startsWith('http');
  const buttonClass = `border border-zinc-500 rounded-md px-2 mx-1 hover:bg-yellow-500 transition-colors hover:text-black transition-colors duration-200 ${className}`;
  
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className={buttonClass}>
          {text}
        </span>
      </a>
    );
  }
  
  return (
    <Link to={href}>
      <span className={buttonClass}>
        {text}
      </span>
    </Link>
  );
}

export default LinkButton;