import Navbar from "./Navbar";

interface HeaderProps {
  title: string;
  highlightedText?: string;
  description: string;
}

const Header = ({ title, highlightedText, description }: HeaderProps) => {
  return (
    <div className="w-full bg-background-silver">
      <header className="w-full max-w-7xl mx-auto px-8">
        <Navbar />
        <div className="w-full max-w-7xl mx-auto px-8 md:px-24 pb-16 pt-4">
          <h1 className="font-semibold text-h1 text-text-headers mb-6 whitespace-normal md:whitespace-nowrap">
            {title}{" "}
            {highlightedText && (
              <span className="text-brand-primary">{highlightedText}</span>
            )}
          </h1>
          <p className="max-w-7xl mx-auto text-left text-body-lg">
            {description}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
