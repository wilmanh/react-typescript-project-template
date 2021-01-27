import React from "react";
interface LinkProps {
  className?: string;
  href: string;
}
const Link: React.FC<LinkProps> = ({ className, href, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
export default Link;
