import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold text-primary">Medi<span className="text-secondary">Connect</span></h2>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, maxime! Deserunt accusantium veritatis accusamus optio a animi recusandae, natus quia doloribus necessitatibus rem ipsam officia laudantium debitis quidem laboriosam magnam.
            </p>
          </div>

          {/* Core Concepts */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold">Core Concepts</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#" className="hover:text-primary transition-colors">Doctors</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
            </div>
          </div>

          {/* Customization */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold">Customization</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#" className="hover:text-primary transition-colors">Doctors</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
            </div>
          </div>

          {/* Community */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold">Community</h3>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          © Copyright 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
