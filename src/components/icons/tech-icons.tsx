import type { SVGProps } from "react";
import { Database, GitBranch, Cloudy, ToyBrick, Share2 } from "lucide-react";

export const IconCSharp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="csharp-title"
    {...props}
  >
    <title id="csharp-title">C# Icon</title>
    <g fill="#68217a">
      <path d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z"/>
    </g>
    <path d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" fill="#fff"/>
    <g fill="#fff">
      <path d="M97.2 66.7h-4.7v-4.7h-3.4v4.7h-4.7v3.4h4.7v4.7h3.4v-4.7h4.7z"/>
      <path d="M113.5 66.7h-4.7v-4.7h-3.4v4.7h-4.7v3.4h4.7v4.7h3.4v-4.7h4.7z"/>
    </g>
  </svg>
);

export const IconDotNet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="dotnet-title"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
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
        <path fill="#F7DF1E" d="M0 0h24v24H0z"/>
        <path d="M16.12 14.39c.39.42.66 1 .66 1.71 0 1.25-.86 1.95-2.13 1.95-1.11 0-1.74-.52-2.03-.89l.86-1.22c.22.28.56.63 1.11.63.48 0 .8-.23.8-.72 0-.34-.14-.54-.83-1.01l-.43-.28c-1.07-.68-1.78-1.57-1.78-2.81 0-1.2.82-2.11 2.05-2.11 1.01 0 1.63.46 1.92.83l-.84 1.2c-.19-.24-.46-.51-.99-.51s-.7.25-.7.66c0 .33.15.51.76.92l.43.28c1.33.86 1.96 1.63 1.96 2.92zm-7.01.25c.34.42.54.91.54 1.54 0 1.54-1.05 2.25-2.43 2.25-1.16 0-1.89-.48-2.22-.99l.83-1.2c.26.37.71.72 1.32.72.6 0 1.05-.28 1.05-1s-.41-1-1.39-1H5.73V9.6h2.15c1.07 0 1.56.36 1.56 1.03 0 .5-.28.84-.79 1.01l1.24 2.8zM7.88 12.3v1.3h-.99c.92 0 1.34-.36 1.34-1.09 0-.61-.41-.95-1.09-.95H6.88v1.74h1z"/>
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
        <path fill="#3178C6" d="M0 0h24v24H0z"/>
        <path fill="#FFF" d="M10.84 14.33h3.04v1.89h-5.1V9.9h5.1v1.89h-3.04v1.1h2.51v1.44h-2.51v-.09zm7.15-2.31c0-.49-.03-.9-.08-1.23l-2.2-5.46h-2.07l3.2 7.55-3.23 7.62h2.07l2.21-5.48c.06-.2.1-.48.13-.85h.03c.03.31.07.59.13.85l2.21 5.48h2.07l-3.23-7.62 3.2-7.55h-2.07l-2.2 5.46c-.05.33-.08.74-.08 1.23v.01z"/>
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
    <path fill="#0078D4" d="M16.5 5.57L10.43 16.6L7.5 12.02l6.08-11.02h9.16L16.5 5.57zM1.25 16.59l6.05-11L13.5 16.6H1.25z"/>
  </svg>
);

export const IconDocker = (props: SVGProps<SVGSVGElement>) => (
  <ToyBrick {...props} />
);

export const IconGit = (props: SVGProps<SVGSVGElement>) => (
  <GitBranch {...props} />
);

export const IconApi = (props: SVGProps<SVGSVGElement>) => (
    <Share2 {...props} />
);
