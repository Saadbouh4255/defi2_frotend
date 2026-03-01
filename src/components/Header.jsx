import { Heart, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <a href="/" className="logo">
          <Heart size={32} />
          IHSAN
        </a>
        <nav className="flex items-center gap-4">
          <button className="btn btn-outline">
            <LogIn size={18} />
            Login
          </button>
          <button className="btn btn-primary">
            <UserPlus size={18} />
            Create Account
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
