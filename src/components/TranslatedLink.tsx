
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface TranslatedLinkProps {
  to: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const TranslatedLink = ({ to, text, className, onClick }: TranslatedLinkProps) => {
  const { translate } = useLanguage();
  
  return (
    <Link 
      to={to} 
      className={className}
      onClick={onClick}
    >
      {translate(text)}
    </Link>
  );
};

export default TranslatedLink;
