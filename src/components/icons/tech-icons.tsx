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
    <title id="csharp-title">C Sharp Icon</title>
    <path
      fill="#390091"
      d="M87.53 34.133h-47.46L24.5 64l15.57 29.867h47.46L103.5 64l-15.97-29.867z"
    />
    <path
      fill="#fff"
      d="M74.12 47.107L68.73 57.8l5.4 10.68-10.966-2.5-5.38 10.7-5.4-10.68 10.98-2.52-5.4-10.68 10.966 2.5zm-22.1 0L46.63 57.8l5.4 10.68-10.966-2.5-5.38 10.7-5.4-10.68 10.98-2.52-5.4-10.68 10.966 2.5zm19.33 13.33h13.33v5.34h-13.33zm-22.06 0h13.33v5.34H49.29zM59.99 44.5h5.33v38.94h-5.33zM59.99 61.47h24v5.33h-24z"
    />
  </svg>
);

export const IconDotNet = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        role="img"
        aria-labelledby="dotnet-title"
        {...props}
    >
        <title id="dotnet-title">.NET Icon</title>
        <path fill="#512BD4" d="M22.31.25H1.69a1.44 1.44 0 0 0-1.44 1.44v20.62a1.44 1.44 0 0 0 1.44 1.44h20.62a1.44 1.44 0 0 0 1.44-1.44V1.69A1.44 1.44 0 0 0 22.31.25zM12 19.38a7.38 7.38 0 1 1 7.38-7.38 7.38 7.38 0 0 1-7.38 7.38zm6.56-7.38a6.56 6.56 0 0 0-6.56-6.56v13.12a6.56 6.56 0 0 0 6.56-6.56zm-9.31 0a2.75 2.75 0 0 1 5.5 0v.1h-5.5z"/>
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
