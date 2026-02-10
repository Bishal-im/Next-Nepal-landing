"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-2xl font-bold text-blue-600">
                Nest Nepal
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
              <Button variant="primary">Get Started</Button>
            </div>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
