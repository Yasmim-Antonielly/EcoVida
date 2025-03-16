import Navbar from "./Navbar";

interface HeaderProps {
  title: string;
  highlightedText?: string;
  description: string;
}

const Header = ({ title, highlightedText, description }: HeaderProps) => {
  return (
    <div className="w-full bg-background-silver">
      <header className="w-full max-w-[1440px] mx-auto px-8">
        <Navbar />
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-24 pb-16 pt-8">
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-h1 text-text-headers mb-8">
            {title}{" "}
            {highlightedText && (
              <span className="block mt-1 text-brand-primary">
                {highlightedText}
              </span>
            )}
          </h1>
          <p className="max-w-2xl text-left text-body-lg">{description}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
