// react
import { memo } from 'react';
// props
import { ScrollLayoutProps } from '.';
// utils
import { classNames, content } from '@/shared/utils';
import { Direction } from '@/shared/types';

const ScrollLayout = memo(
    ({ className, classNameContent, direction = 'top-bottom', children }: ScrollLayoutProps) => {
        const styles: Record<Direction, { wrapper: string; scroll: string }> = {
            'left-right': {
                wrapper: 'flex-row',
                scroll: 'flex-row overflow-x-auto',
            },
            'right-left': {
                wrapper: 'flex-row-reverse',
                scroll: 'flex-row-reverse overflow-x-auto',
            },
            'top-bottom': {
                wrapper: 'flex-col',
                scroll: 'flex-col overflow-y-auto',
            },
            'bottom-top': {
                wrapper: 'flex-col-reverse',
                scroll: 'flex-col-reverse overflow-y-auto',
            },
        };

        return (
            <div
                className={classNames(
                    'flex overflow-hidden',
                    styles[direction].wrapper,
                    className
                )}>
                <div
                    className={classNames(
                        'flex flex-grow overflow-hidden',
                        styles[direction].scroll,
                        classNameContent
                    )}>
                    {content(children)}
                </div>
            </div>
        );
    }
);

export default ScrollLayout;
