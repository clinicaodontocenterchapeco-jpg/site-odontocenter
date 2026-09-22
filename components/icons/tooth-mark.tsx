import type { ComponentProps } from "react";

export function ToothMark(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7.7 6.8c2.5-2 5.2-1.2 8.3 0 3.1-1.2 5.8-2 8.3 0 3 2.4 2 7 .9 10.5C23.9 21.6 21.5 27 19.4 27c-1.5 0-1.3-6-3.4-6s-1.9 6-3.4 6c-2.1 0-4.5-5.4-5.8-9.7-1.1-3.5-2.1-8.1.9-10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9.1c2.3.8 5 .7 7.6-.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
