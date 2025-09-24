import StaggeredMenu from "./StaggeredMenu";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-40">
      <StaggeredMenu
        items={[
          { label: "Home", ariaLabel: "Home", link: "/" },
          { label: "About", ariaLabel: "About", link: "/about" },
          { label: "Gallery", ariaLabel: "Gallery", link: "/gallery" },
          { label: "Contact", ariaLabel: "Contact", link: "/contact" },
        ]}
        socialItems={[
          { label: "Instagram", link: "https://instagram.com/" },
          { label: "Facebook", link: "https://facebook.com/" },
        ]}
        colors={["#F5E6E8", "#7A8B7A", "#FAF9F6"]}
        accentColor="#7A8B7A"
        openMenuButtonColor="#7A8B7A"
        menuButtonColor="#2C2C2C"
      />
    </div>
  );
};

export const Footer: React.FC = () => (
  <footer className="mt-16 border-t bg-white/70 backdrop-blur text-sm text-foreground/80">
    <div className="container mx-auto px-6 py-8 grid gap-4 sm:grid-cols-3">
      <div>© {new Date().getFullYear()} JayKarun Art</div>
      <div className="text-center">Follow: Instagram · Facebook</div>
      <nav className="text-right space-x-4">
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </div>
  </footer>
);

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header />
      <main className="pt-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
