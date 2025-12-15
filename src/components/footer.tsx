import { GithubIcon, LinkedinIcon } from './icons';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Portfolio Pro. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
