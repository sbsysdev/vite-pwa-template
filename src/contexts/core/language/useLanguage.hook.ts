// react
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// types
import { Language, Translation } from './language.type';

export const useLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = useCallback((lang: Language) => i18n.changeLanguage(lang), [i18n]);

    const translate = useCallback((key: Translation) => t(key), [t]);

    return {
        language: i18n.language as Language,
        changeLanguage,
        translate,
    };
};
