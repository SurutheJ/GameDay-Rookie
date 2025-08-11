import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <header role="banner" className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center gap-2 py-3" aria-label="Global">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            aria-label="Go back"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-1" />
            Back
          </Button>
          <Button
            variant="ghost"
            size="sm"
            aria-label="Go home"
            onClick={() => navigate("/")}
          >
            <Home className="mr-1" />
            Home
          </Button>
        </div>
        <Link
          to="/"
          className="ml-auto font-semibold tracking-tight text-foreground hover:text-foreground/90"
          aria-label="GameDay Rookie Home"
          title="GameDay Rookie"
        >
          GameDay Rookie
        </Link>
      </nav>
    </header>
  );
};

export default TopNav;
