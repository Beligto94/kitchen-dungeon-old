import * as React from 'react';
import SvgButton from "./SvgButton";
import {log} from "util";

const SvgComponent = props => (
    <svg width={387} height={59} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <SvgButton/>
        <g filter="url(#c)">
            <rect x={84} y={8} width={66} height={43} rx={10} />
            <path
                d="M117 21.375c-4.48 0-8.125 3.645-8.125 8.125s3.645 8.125 8.125 8.125
                 8.125-3.645 8.125-8.125-3.645-8.125-8.125-8.125Zm0
                1.25a6.883 6.883 0 0 1 6.875 6.875A6.883 6.883 0 0 1 117 36.375a6.883 6.883 0 0
                 1-6.875-6.875A6.883 6.883 0 0 1 117 22.625Zm-1.25 2.5a.624.624 0 1 0 0 1.248.624.624 0
           0 0 0-1.248Zm3.438.625a.936.936 0 0 0-.663 1.6.936.936 0 0 0 1.6-.663.937.937 0 0 0-.937-.937Zm-5.313
                  1.875a1.25 1.25 0 1 0 0 2.501 1.25 1.25 0 0 0 0-2.501Zm3.75 1.25a.624.624 0 1 0 0 1.248.624.624 0 0 0
                  0-1.248Zm3.125.625a.624.624 0 1 0 0 1.248.624.624 0 0 0 0-1.248Zm-5.938
                   1.875a.935.935 0 0 0-.937.938.937.937
                  0 1 0 .937-.938Zm4.376.625a.936.936 0 0 0-.663 1.6.936.936 0 0 0 1.6-.663.937.937 0 0 0-.937-.937Z"
                fill="#A4B0BD"
            />
        </g>
        <g filter="url(#d)">
            <rect x={160} y={8} width={67} height={43} rx={10} fill="#fff" />
            <path
                d="M188.5 22.625a1.885 1.885 0 0 0-1.875 1.875v11.875h8.75V32h1.25v2.5c0 1.028.847 1.875 1.875
                 1.875a1.885 1.885 0 0 0 1.875-1.875v-6.367c0-.498-.196-.957-.547-1.309l-2.949-2.949-.879.879 1.777
                  1.777a1.88 1.88 0 0 0-1.152 1.719c0 1.028.847 1.875 1.875
                   1.875.214-.003.425-.042.625-.117V34.5a.614.614 0 0 1-.625.625.614.614 0 0
                    1-.625-.625V32c0-.684-.566-1.25-1.25-1.25h-1.25V24.5a1.885 1.885 0 0 0-1.875-1.875h-5Zm0
                    1.25h5c.354 0 .625.271.625.625V27h-6.25v-2.5c0-.354.271-.625.625-.625Zm10 3.75c.352 0
                     .625.274.625.625a.617.617 0 0 1-.625.625.617.617 0 0
                      1-.625-.625c0-.352.274-.625.625-.625Zm-10.625.625h6.25v6.875h-6.25V28.25Z"
                fill="#A4B0BD"
            />
        </g>
        <g filter="url(#e)">
            <rect x={237} y={8} width={66} height={43} rx={10} fill="#fff" />
            <path
                d="M265.312 22.625a3.44 3.44 0 0 0-3.437 3.438v6.875a3.442 3.442 0 0 0 3.437 3.437 3.442 3.442 0 0 0
                 3.438-3.438v-3.184l3.784 5.207a3.439 3.439 0 0 0 4.802.762v-.001a3.442 3.442 0 0 0
                 .76-4.802l-4.041-5.562a3.438 3.438 0 0 0-4.801-.76c-.231.17-.44.368-.621.59a3.44 3.44 0 0
                 0-3.321-2.562Zm0 1.25a2.19 2.19 0 0 1 2.188 2.188v2.812h-4.375v-2.813a2.19 2.19 0 0 1
                  2.187-2.187Zm5.96 1.316a2.184 2.184 0 0 1 1.772.9l1.654 2.275-3.539 2.573-1.655-2.275a2.192
                   2.192 0 0 1 1.768-3.474Zm4.16 4.186 1.654 2.276a2.192 2.192 0 0 1-.485 3.056 2.188 2.188 0 0
                   1-3.055-.483l-1.653-2.276 3.539-2.573Zm-12.307.748h4.375v2.813a2.19 2.19 0 0 1-2.188 2.187 2.19
                    2.19 0 0 1-2.187-2.188v-2.812Z"
                fill="#A4B0BD"
            />
        </g>
        <g filter="url(#f)">
            <rect x={313} y={8} width={66} height={43} rx={10} fill="#fff" />
            <path
                d="M346 21.375a2.481 2.481 0 0 0-2.402 1.875h-5.723v12.5h16.25v-12.5h-5.723A2.48 2.48 0 0 0 346
                 21.375Zm0 1.25c.506 0 .894.242 1.094.625h-2.188c.2-.383.588-.625 1.094-.625Zm-6.875
                 1.875h13.75v5.625h-13.75V24.5ZM346 28.25a.627.627 0 0 0-.625.625c0 .344.281.625.625.625a.627.627
                  0 0 0 .625-.625.627.627 0 0 0-.625-.625Zm-6.875 3.125h13.75V34.5h-13.75v-3.125Z"
                fill="#A4B0BD"
            />
        </g>
        <defs>
            <filter
                id="a"
                x={0}
                y={0}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feColorMatrix values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24890_53512" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_24890_53512" result="shape" />
            </filter>
            <filter
                id="c"
                x={76}
                y={0}
                width={82}
                height={59}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feColorMatrix values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24890_53512" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_24890_53512" result="shape" />
            </filter>
            <filter
                id="d"
                x={152}
                y={0}
                width={83}
                height={59}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feColorMatrix values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24890_53512" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_24890_53512" result="shape" />
            </filter>
            <filter
                id="e"
                x={229}
                y={0}
                width={82}
                height={59}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feColorMatrix values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24890_53512" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_24890_53512" result="shape" />
            </filter>
            <filter
                id="f"
                x={305}
                y={0}
                width={82}
                height={59}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feColorMatrix values="0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0 0.345833 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24890_53512" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_24890_53512" result="shape" />
            </filter>
            <clipPath id="b">
                <path fill="#fff" transform="translate(31 19.5)" d="M0 0h20v20H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgComponent;
