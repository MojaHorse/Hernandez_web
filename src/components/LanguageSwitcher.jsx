import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const isEnglish = currentLang.startsWith('en');

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex items-center gap-1.5 font-medium text-sm border-l border-gray-200 pl-4 h-5">
            <button
                onClick={() => switchLanguage('en')}
                className={`${isEnglish ? 'text-hihs-accent font-bold' : 'text-gray-400 hover:text-hihs-charcoal'} transition-colors leading-none`}
            >
                EN
            </button>
            <span className="text-gray-300 select-none">/</span>
            <button
                onClick={() => switchLanguage('es')}
                className={`${!isEnglish ? 'text-hihs-accent font-bold' : 'text-gray-400 hover:text-hihs-charcoal'} transition-colors leading-none`}
            >
                ES
            </button>
        </div>
    );
};

export default LanguageSwitcher;
