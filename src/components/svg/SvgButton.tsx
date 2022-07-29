/* eslint-disable */
/* tslint:disable */
import * as React from 'react';

const SvgButton = props => (
    <svg {...props} width={82} height={59} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a)">
            <rect x={8} y={8} width={66} height={43} rx={10} fill="#fff" />
            <g clipPath="url(#b)">
                <path
                    d="m46.644 22-.644.293c-1.987.876-4.858 1.206-7.305 2.07-1.223.433-2.356 1.009-3.203 1.934s-1.367
  2.2-1.367 3.828c0 1.684.991 2.84 1.914 3.496.343.245.71.454 1.094.625-.386.715-.672   1.36-.86 1.914-.341.999-.395 1.78-.37
    2.344.024.564.097.95.097.937l1.25.118c.04-.452-.078-.689-.097-1.114-.02-.425.016-1.008.312-1.875.59-1.73 2.229-4.58
     6.484-9.14l-.898-.86c-2.552 2.734-4.2 4.866-5.273
     6.582-.36-.141-.7-.324-1.016-.546-.725-.515-1.387-1.27-1.387-2.481 0-1.377.393-2.285 1.035-2.988.643-.703
     1.578-1.206 2.696-1.602 2.023-.715 4.528-1.076 6.679-1.875.2.76.84 3.36.84 7.422 0 2.305-.54 3.626-1.172
      4.355-.632.73-1.394.938-2.07.938-.674 0-1.402-.344-2.032-.781-.63-.438-1.064-.894-1.504-1.172l-.663
       1.055c.112.07.735.647 1.465 1.152.73.505 1.655.996 2.733.996.963 0 2.14-.34 3.028-1.367.889-1.027 1.465-2.679
        1.465-5.176 0-4.888-1.035-8.398-1.035-8.398L46.644 22Z"
                    fill="#7CCF3A"
                />
            </g>
        </g>
        <defs>
            <clipPath id="b">
                <path fill="#fff" transform="translate(31 19.5)" d="M0 0h20v20H0z" />
            </clipPath>
            <filter
                id="a"
                x={0}
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
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_24890_53502" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_24890_53502" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default SvgButton;
