
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
      <div className="container max-w-7xl px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              CampusTracker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`
              }
              end
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/resume-analysis" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`
              }
            >
              Resume Analysis
            </NavLink>
            <NavLink 
              to="/placement-analysis" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`
              }
            >
              Placement Analysis
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md transition-colors ${isActive ? 'bg-secondary text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`
                }
                onClick={toggleMenu}
                end
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/resume-analysis" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md transition-colors ${isActive ? 'bg-secondary text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`
                }
                onClick={toggleMenu}
              >
                Resume Analysis
              </NavLink>
              <NavLink 
                to="/placement-analysis" 
                className={({ isActive }) => 
                  `px-2 py-1 rounded-md transition-colors ${isActive ? 'bg-secondary text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`
                }
                onClick={toggleMenu}
              >
                Placement Analysis
              </NavLink>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <Button className="w-full justify-start">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
