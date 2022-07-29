import * as React from 'react';
import { SVGProps } from 'react';

const ExampleSVG = ({ fill, ...props }: SVGProps<SVGSVGElement>) => (
    <svg width={59} height={59} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.94 381" {...props}>
        <defs>
            <style>{`.c{fill:${props.color}`}</style>
        </defs>
        <path
            style={{
                fill: fill,
            }}
            d="M110.27 380.5.58 190.5 110.27.5h219.4l109.69 190-109.69 190h-219.4z"
        />
        <path
            d="m329.38 1 109.41 189.5L329.38 380H110.56L1.15 190.5 110.56 1h218.82m.58-1H109.99L0 190.5 109.99
        381h219.97l109.99-190.5L329.96 0Z"
        />
        <path
            className="c"
            d="M192.61 107.49v-5.5c0-1.87-1.52-3.39-3.39-3.39s-3.39 1.52-3.39 3.39v5.5c0 1.87 1.52 3.39 3.39
            3.39s3.39-1.52 3.39-3.39ZM253.38 107.49v-5.5c0-1.87-1.52-3.39-3.39-3.39s-3.39 1.52-3.39 3.39v5.5c0
  1.87 1.52 3.39 3.39 3.39s3.39-1.52 3.39-3.39ZM219.6 113.82c3.9 0 7.57-1.63 10.06-4.48a3.4 3.4 0 0
   0-.32-4.79 3.4 3.4 0 0 0-4.79.32c-1.2 1.37-3 2.16-4.94 2.16s-3.74-.79-4.95-2.16a3.39 3.39 0 0 0-4.79-.32
    3.39 3.39 0 0 0-.32 4.79c2.49 2.85 6.15 4.48 10.06 4.48ZM332.08 242.69c-1.87 0-3.39 1.52-3.39
     3.39v33.29c0 5.42-4.41 9.83-9.83
      9.83h-12.62v-81.6c0-23.1-9.02-44.85-25.4-61.23-16.38-16.38-38.12-25.4-61.23-25.4s-44.85 9.02-61.23
       25.4c-16.38 16.38-25.4 38.12-25.4
        61.23v81.6h-12.62c-5.42 0-9.83-4.41-9.83-9.83V141.09c0-1.88-1.52-3.39-3.39-3.39s-3.39 1.52-3.39
        3.39v138.29c0 9.17 7.46 16.62 16.62 16.62h198.49c9.17 0 16.62-7.46
         16.62-16.62v-33.29c0-1.88-1.52-3.39-3.39-3.39ZM265.5
          211h33.95v35.71H265.5V211Zm-.12-6.8c-1.16-9.83-4.43-18.92-11.01-26.53l24.03-24.04c12.84 13.95 20.2 31.69
           20.99 50.58h-34Zm-15.83-31.35a49.84 49.84 0 0 0-3.03-2.4 45.894 45.894 0 0 0-23.51-8.61v-34c18.89.79 36.63
            8.15 50.58 20.99 0 0-24.03 24.03-24.03 24.02Zm-33.34-45.01v34c-7.28.53-14.41 2.83-20.62 6.67a46.421 46.421
            0 0 0-5.92 4.35l-24.03-24.03c13.95-12.84 31.69-20.2 50.58-20.99Zm-55.38 25.79 24.03 24.03h-.01c-6.34
            7.48-10.29 16.76-11.01 26.55h-34c.79-18.89 8.15-36.63 20.99-50.58ZM139.77 211h33.95v35.71h-33.95V211Zm0
             42.5h33.95v35.71h-33.95V253.5Zm40.73-45.89c0-21.21 17.93-39.1 39.1-39.1s39.1 17.84 39.1
              39.1v81.6h-78.2v-81.6Zm84.99 81.6V253.5h33.95v35.71h-33.95Z"
        />
        <path
            className="c"
            d="M318.85 85.34H120.36c-9.17 0-16.62 7.46-16.62 16.62v25.55c0 1.87 1.52 3.39 3.39 3.39s3.39-1.52
             3.39-3.39v-25.55c0-5.42 4.41-9.83 9.83-9.83h198.49c5.42 0 9.83 4.41 9.83 9.83v130.55c0 1.87 1.52
              3.39 3.39 3.39s3.39-1.52 3.39-3.39V101.96c0-9.17-7.46-16.62-16.62-16.62Z"
        />
    </svg>
);

export default ExampleSVG;