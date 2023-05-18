// types
import { Slot } from '@/shared/types';

export type Language = 'en' | 'es';

export interface LanguageProviderProps {
    children?: Slot;
}

export type Translation = `actions.${'close' | 'reload'}`;
