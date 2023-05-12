/* types */
import { Slot } from '../types';

export function content<T = undefined>(component: Slot<T>, params?: T) {
    return typeof component === 'function' ? component(params) : component;
}
