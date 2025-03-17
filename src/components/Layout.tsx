
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-kartify-black overflow-x-hidden">
      <header className="w-full border-b border-white/10 backdrop-blur-sm bg-black/40 fixed top-0 left-0 right-0 z-50">
        <div className="container px-4 md:px-6 mx-auto py-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-2xl font-bold tracking-tight text-white transition-all duration-300 ease-in-out group-hover:text-kartify-neon-blue animate-pulse-glow">
              Kartify
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" isActive>
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
            </NavLink>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="relative p-2 text-white hover:text-kartify-neon-blue transition-colors duration-200 ease-in-out"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-kartify-neon-pink text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>
            
            <button 
              className="md:hidden text-white hover:text-kartify-neon-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-kartify-black/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="pt-24 px-6 flex flex-col gap-6">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Cart
          </MobileNavLink>
        </div>
      </div>

      <main className="flex-1 pt-20 pb-10 px-4">
        {children}
      </main>

      <footer className="border-t border-white/10 py-8 px-4 bg-kartify-black-light">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Kartify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ease-in-out",
        isActive 
          ? "text-kartify-neon-blue neon-text" 
          : "text-white/80 hover:text-white hover:bg-white/5"
      )}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="flex items-center px-4 py-3 text-lg font-medium rounded-md text-white hover:text-kartify-neon-blue transition-colors duration-200 ease-in-out"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Layout;
