import type { SVGProps } from "react";

export function SweetGalleryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 17.5a2.5 2.5 0 0 1-5 0" />
      <path d="M14 17.5a2.5 2.5 0 0 1-5 0" />
      <path d="M8 17.5a2.5 2.5 0 0 1-5 0" />
      <path d="M3 15.5v-5.5a9 9 0 0 1 18 0v5.5" />
      <path d="M3 15.5a9 9 0 0 0 18 0" />
      <path d="M12 9.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
      <path d="M12 4.5a2.5 2.5 0 0 1 2.5 2.5" />
      <path d="M12 2v2.5" />
    </svg>
  );
}
