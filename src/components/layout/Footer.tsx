import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Roboto <span className="text-accent">SAI</span>
            </span>
            <p className="text-sm text-muted-foreground">
              Advancing ethical, human-centered AI systems.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:roboto.sai@outlook.com"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              roboto.sai@outlook.com
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Roboto SAI — All Rights Reserved
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/governance" className="hover:text-accent transition-colors">
              Governance
            </Link>
            <Link to="/donate" className="hover:text-accent transition-colors">
              Donate
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
