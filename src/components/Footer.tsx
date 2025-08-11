import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="border-t border-border bg-background">
      <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
        <p>
          Created by <span className="font-medium text-foreground">Suruthe Jayachandran</span> • {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
