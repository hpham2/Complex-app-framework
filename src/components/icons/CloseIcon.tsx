import * as React from "react";

export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      style={{ cursor: "pointer" }}
      {...props}
    >
      <path d="M19 3H5a2 2 0 00-2 2V19a2 2 0 002 2H19a2 2 0 002-2V5a2 2 0 00-2-2m-3.4 14L12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6-1.4 1.4z" />
    </svg>
  );
}
