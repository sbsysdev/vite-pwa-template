// react
import { memo } from 'react';

const Loader = memo(() => {
    return (
        <div className="fixed inset-0 p-4 z-[200] flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-dark-900 bg-opacity-75" />

            <span className="absolute flex flex-col justify-center items-center w-24 text-secondary-500">
                <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <g transform="translate(2 1)" stroke="currentColor" strokeWidth="1.0">
                            <circle
                                cx="42.601"
                                cy="11.462"
                                r="5"
                                fillOpacity="1"
                                fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="1;0;0;0;0;0;0;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="49.063"
                                cy="27.063"
                                r="5"
                                fillOpacity="0"
                                fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;1;0;0;0;0;0;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="42.601"
                                cy="42.663"
                                r="5"
                                fillOpacity="0"
                                fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;0;1;0;0;0;0;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;0;0;1;0;0;0;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="11.399"
                                cy="42.663"
                                r="5"
                                fillOpacity="0"
                                fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;0;0;0;1;0;0;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="4.938"
                                cy="27.063"
                                r="5"
                                fillOpacity="0"
                                fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;0;0;0;0;1;0;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle
                                cx="11.399"
                                cy="11.462"
                                r="5"
                                fillOpacity="0"
                                fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;0;0;0;0;0;1;0"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <circle cx="27" cy="5" r="5" fillOpacity="0" fill="currentColor">
                                <animate
                                    attributeName="fill-opacity"
                                    begin="0s"
                                    dur="1.3s"
                                    values="0;0;0;0;0;0;0;1"
                                    calcMode="linear"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>
                    </g>
                </svg>
            </span>
        </div>
    );
});

export default Loader;
