// react
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// types
import { Language, Translation } from './language.type';

export const languages: Record<
    Language,
    {
        iso: Language;
        language: string;
    }
> = {
    en: {
        iso: 'en',
        language: 'English',
    },
    es: {
        iso: 'es',
        language: 'Español',
    },
};

export const useLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = useCallback((lang: Language) => i18n.changeLanguage(lang), [i18n]);

    const translate = useCallback((key: Translation) => t(key), [t]);

    return {
        language: i18n.language as Language,
        languages,
        changeLanguage,
        translate,
    };
};
