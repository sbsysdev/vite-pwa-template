// react
import { memo } from 'react';
import { Provider } from 'react-redux';
// store
import { store } from './store';
// props
import { StoreProviderProps } from './store.props';
// utils
import { content } from '@/shared/utils';

const StoreProvider = memo(({ children }: StoreProviderProps) => {
    return <Provider store={store}>{content(children)}</Provider>;
});

export default StoreProvider;
