import React from "react";

export const DorhLogo: React.FC<{ dark?: boolean }> = ({ dark = true }) => {
  const iconFill = dark ? "#0f2340" : "#f7f1e3";
  const titleColor = dark ? "#0f2340" : "#f7f1e3";

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      <div
        className={`shrink-0 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-2xl flex flex-col items-center justify-center border shadow-xs ${
          dark
            ? "bg-[#efe6d0] border-[#0f2340]/12"
            : "bg-white/[0.07] border-white/15"
        }`}
      >
        <svg
          viewBox="0 0 64 40"
          className="w-[34px] h-[21px] sm:w-[36px] sm:h-[23px]"
          aria-hidden="true"
        >
          <ellipse cx="32" cy="32" rx="22" ry="6.5" fill={iconFill} />
          <ellipse cx="32" cy="22" rx="15.5" ry="5.8" fill={iconFill} />
          <ellipse cx="33" cy="13.5" rx="10" ry="5" fill={iconFill} />
          <path
            d="M32 1.5 C35.5 5 36.5 7.5 32 10.5 C27.5 7.5 28.5 5 32 1.5Z"
            fill={iconFill}
          />
        </svg>
        <div
          className="leading-none text-center mt-[2px]"
          style={{ color: iconFill }}
        >
          <div
            className="font-display tracking-[0.28em] text-[11px] sm:text-[12px]"
            dir="ltr"
          >
            DORH
          </div>
          <div
            className="text-[7px] tracking-[0.45em] font-bold mt-[1px] opacity-85"
            dir="ltr"
          >
            SPA
          </div>
        </div>
      </div>

      <div className="leading-none">
        <div
          className="font-display-black text-[17px] sm:text-[19px]"
          style={{ color: titleColor }}
        >
          درّة سبا المنزلي
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="h-[2px] w-5 rounded-full bg-[#c9a227]" />
          <span
            className="text-[9.5px] sm:text-[10px] tracking-[0.3em] font-extrabold text-[#a97e3f]"
            dir="ltr"
          >
            DORH SPA
          </span>
        </div>
      </div>
    </div>
  );
};

export const WhatsAppIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
  </svg>
);

export const GoogleIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.5 12.3c0-.9-.1-1.5-.3-2.3H12v4.5h6.5c0 1.1-.7 2.7-2.1 3.8l-.1.1 3 2.4h.2c1.9-1.8 3-4.4 3-8.5z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5l-.1.1-3.1 2.4v.1C3.9 21.3 7.7 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-.1-.1-3.1-2.4H1.9C.7 9.5 0 10.7 0 12s.7 2.5 1.9 3.9l3.3-1.5z"
    />
    <path
      fill="#EA4335"
      d="M12 4.6c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.7 0 3.9 2.7 1.9 7.1l3.3 2.5c1-2.9 3.7-5 6.8-5z"
    />
  </svg>
);

export const TabbyTamaraBadges: React.FC<{ compact?: boolean }> = ({
  compact = false,
}) => (
  <div
    className={`inline-flex items-center gap-1.5 ${compact ? "" : "mt-1"}`}
    dir="ltr"
  >
    <span className="rounded-md bg-[#3aef8b]/20 border border-[#1da851]/35 text-[#0d6e44] text-[11px] font-extrabold px-2 py-0.5 tracking-tight">
      tabby
    </span>
    <span className="rounded-md bg-[#ff7ab8]/15 border border-[#ff7ab8]/40 text-[#b83b74] text-[11px] font-extrabold px-2 py-0.5 tracking-tight">
      tamara
    </span>
  </div>
);
