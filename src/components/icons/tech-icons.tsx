import type { SVGProps } from "react";
import { Database, GitBranch, Cloudy, ToyBrick, Share2 } from "lucide-react";

export const IconCSharp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="csharp-title"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    {...props}
  >
    <title id="csharp-title">C# Icon</title>
    <circle cx="64" cy="64" r="64" fill="#68217A" />
    {/* Texto C# centrado dentro del círculo */}
    <text
      x="64"
      y="64"
      fill="#ffffff"
      fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
      fontSize="52"
      fontWeight="700"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      C#
    </text>
  </svg>
);

export const IconDotNet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="dotnet-title"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    {...props}
  >
    <title id="dotnet-title">.NET Icon</title>
    <rect width="128" height="128" rx="8" fill="#512bd4" />
    {/* Texto .NET centrado dentro del cuadrado */}
    <text
      x="64"
      y="64"
      fill="#ffffff"
      fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
      fontSize="44"
      fontWeight="700"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      .NET
    </text>
  </svg>
);

export const IconReact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    role="img"
    aria-labelledby="react-title"
    {...props}
  >
    <title id="react-title">React Icon</title>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const IconJavaScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby="javascript-title"
    {...props}
  >
    <title id="javascript-title">JavaScript Icon</title>
    <path fill="#F7DF1E" d="M0 0h24v24H0z" />
    <path d="M16.12 14.39c.39.42.66 1 .66 1.71 0 1.25-.86 1.95-2.13 1.95-1.11 0-1.74-.52-2.03-.89l.86-1.22c.22.28.56.63 1.11.63.48 0 .8-.23.8-.72 0-.34-.14-.54-.83-1.01l-.43-.28c-1.07-.68-1.78-1.57-1.78-2.81 0-1.2.82-2.11 2.05-2.11 1.01 0 1.63.46 1.92.83l-.84 1.2c-.19-.24-.46-.51-.99-.51s-.7.25-.7.66c0 .33.15.51.76.92l.43.28c1.33.86 1.96 1.63 1.96 2.92zm-7.01.25c.34.42.54.91.54 1.54 0 1.54-1.05 2.25-2.43 2.25-1.16 0-1.89-.48-2.22-.99l.83-1.2c.26.37.71.72 1.32.72.6 0 1.05-.28 1.05-1s-.41-1-1.39-1H5.73V9.6h2.15c1.07 0 1.56.36 1.56 1.03 0 .5-.28.84-.79 1.01l1.24 2.8zM7.88 12.3v1.3h-.99c.92 0 1.34-.36 1.34-1.09 0-.61-.41-.95-1.09-.95H6.88v1.74h1z" />
  </svg>
);

export const IconTypeScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby="typescript-title"
    {...props}
  >
    <title id="typescript-title">TypeScript Icon</title>
    <path fill="#3178C6" d="M0 0h24v24H0z" />
    <path fill="#FFF" d="M10.84 14.33h3.04v1.89h-5.1V9.9h5.1v1.89h-3.04v1.1h2.51v1.44h-2.51v-.09zm7.15-2.31c0-.49-.03-.9-.08-1.23l-2.2-5.46h-2.07l3.2 7.55-3.23 7.62h2.07l2.21-5.48c.06-.2.1-.48.13-.85h.03c.03.31.07.59.13.85l2.21 5.48h2.07l-3.23-7.62 3.2-7.55h-2.07l-2.2 5.46c-.05.33-.08.74-.08 1.23v.01z" />
  </svg>
);

export const IconTailwind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby="tailwind-title"
    {...props}
  >
    <title id="tailwind-title">Tailwind CSS Icon</title>
    <path
      fill="#38BDF8"
      d="M12 12c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6Zm-6.5 2.5c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6Z"
    />
  </svg>
);

export const IconAzure = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby="azure-title"
    {...props}
  >
    <title id="azure-title">Azure Icon</title>
    <path fill="#0078D4" d="M16.5 5.57L10.43 16.6L7.5 12.02l6.08-11.02h9.16L16.5 5.57zM1.25 16.59l6.05-11L13.5 16.6H1.25z" />
  </svg>
);

export const IconAngular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="angular-title"
    {...props}
  >
    <title id="angular-title">Angular Icon</title>
    <path fill="#DD0031" d="M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026z" />
    <path fill="#C3002F" d="M63.81 1.026v125.06c.45-.149.896-.297 1.286-.446l50.214-27.828 9.36-77.635L63.81 1.026z" />
    <path fill="#FFF" d="M63.81 17.724L94.75 93.73h-10.73l-7.06-17.574H50.842l-7.06 17.574H33.07l30.74-76.006zm0 16.527l-12.65 31.83h25.3l-12.65-31.83z" />
  </svg>
);

export const IconGithubActions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="github-actions-title"
    {...props}
  >
    <title id="github-actions-title">GitHub Actions Icon</title>
    <path fill="#2088FF" d="M35.2 17.6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    <path fill="#79B8FF" d="M64 49.6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    <path fill="#2188FF" d="M92.8 17.6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    <path fill="#56D364" d="M92.8 81.6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    <path fill="#79B8FF" d="M35.2 81.6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    <path fill="#79B8FF" d="M43.8 35.2l14.4 17.6m0 0l14.4-17.6M58.2 52.8L43.8 70.4m14.4 0l14.4 17.6" />
  </svg>
);

export const IconDocker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="docker-title"
    {...props}
  >
    <title id="docker-title">Docker Icon</title>
    <path fill="#0DB7ED" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.4.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 1.5-8.9 1.5H79V49.3c0-2.6-2.2-4.7-4.9-4.7h-4.9V34.4c0-2.6-2.2-4.7-4.9-4.7h-4.9V19.5c0-2.6-2.2-4.7-4.9-4.7H45V4.6c0-2.6-2.2-4.7-4.9-4.7H4.9C2.2 0 0 2.1 0 4.6v39.6c0 2.6 2.2 4.7 4.9 4.7h89.8c3.4 0 6.9-.4 10.1-1.4 4.1-1.3 8.3-3.6 10.8-6.8 4.9-6.2 7.5-14.4 7.5-22.5V52l-1.5.1c-1.6 0-3.2-.3-4.8-.9zm-36.3-8.3v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7H69zm-9.8 0v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7h-4.9zM39.5 34.4v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7H30zm-9.8 0v-4.7h4.9v4.7h-4.9zm29.4 9.8v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7h-4.9zm-9.8 0v-4.7h4.9v4.7H20z" />
  </svg>
);

export const IconGit = (props: SVGProps<SVGSVGElement>) => (
  <GitBranch {...props} />
);

export const IconApi = (props: SVGProps<SVGSVGElement>) => (
  <Share2 {...props} />
);
