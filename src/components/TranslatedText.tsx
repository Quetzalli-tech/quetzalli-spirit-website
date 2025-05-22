
import { useLanguage } from "@/contexts/LanguageContext";

interface TranslatedTextProps {
  text: string;
  className?: string;
}

const TranslatedText = ({ text, className }: TranslatedTextProps) => {
  const { translate } = useLanguage();
  return <span className={className}>{translate(text)}</span>;
};

export default TranslatedText;
