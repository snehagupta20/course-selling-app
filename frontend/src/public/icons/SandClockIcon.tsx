import * as React from "react";

function IconSandClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em" {...props}>
      <path fill="currentColor" d="M13 6h-2v1a1 1 0 102 0V6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 2v2h1v3a5 5 0 005 5 5 5 0 00-5 5v3H6v2h12v-2h-1v-3a5 5 0 00-5-5 5 5 0 005-5V4h1V2H6zm3 2h6v3a3 3 0 11-6 0V4zm0 13v3h6v-3a3 3 0 10-6 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconSandClock;
