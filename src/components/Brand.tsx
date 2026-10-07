import type { SVGProps } from "react";

export function Lotus({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 70 62"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M35 43C19 30 23 16 35 5c12 11 16 25 0 38Z" />
        <path d="M35 43C17 44 10 31 11 17c14 2 24 11 24 26Z" />
        <path d="M35 43c18 1 25-12 24-26-14 2-24 11-24 26Z" />
        <path d="M35 46C19 53 5 45 3 31c13-1 25 4 32 15Z" />
        <path d="M35 46c16 7 30-1 32-15-13-1-25 4-32 15Z" />
        <path d="M16 53c12 6 26 6 38 0M25 59h20" />
        <path d="M35 15v26" opacity=".55" />
      </g>
    </svg>
  );
}

export function Brand({
  light = false,
  compact = false,
  name = "درة المساج",
}: {
  light?: boolean;
  compact?: boolean;
  name?: string;
}) {
  return (
    <a
      className={`brand${light ? " brand-light" : ""}${compact ? " brand-compact" : ""}`}
      href="#home"
      aria-label={`${name} والتدليك الرياضي، العودة للرئيسية`}
    >
      <img
        className="brand-mark"
        src="/images/logo.png"
        alt=""
        width="95"
        height="98"
      />
      <span className="brand-type">
        <span className="brand-name">{name}</span>{" "}
        {/* <span className="brand-description">والتدليك الرياضي</span> */}
      </span>
    </a>
  );
}

export function WhatsAppIcon({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.32-4.77A8.5 8.5 0 1 1 20.5 11.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m8.6 7.3 1.15 2.1-.9 1.1c.85 1.65 1.9 2.65 3.55 3.45l1.05-.95 2.15 1.05c.1 1.1-.5 2-1.55 2.05-3.4-.15-7.9-4.55-7.7-7.2.05-1.05.9-1.7 2.25-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GoogleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-label="Google"
      role="img"
    >
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.36Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.24-2.51c-.9.6-2.04.97-3.38.97-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.41 13.92A6 6 0 0 1 6.1 12c0-.67.11-1.32.31-1.92V7.49H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.51l3.34-2.59Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.79.51 3.83 1.51l2.88-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59C7.2 7.72 9.4 5.96 12 5.96Z"
      />
    </svg>
  );
}
