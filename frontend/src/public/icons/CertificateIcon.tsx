import * as React from "react";

interface IconCertificateProps extends React.SVGProps<SVGSVGElement> {
  height?: string; // Optional height prop
  width ?: string;
}

function IconCertificate({ height = "2em", width="2em", ...props }: IconCertificateProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height={height} // Use the height prop here
      width={width}
      {...props}
    >
      <path d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 002 2h8v5l3-3 3 3v-5h2a2 2 0 002-2V5a2 2 0 00-2-2H4m8 2l3 2 3-2v3.5l3 1.5-3 1.5V15l-3-2-3 2v-3.5L9 10l3-1.5V5M4 5h5v2H4V5m0 4h3v2H4V9m0 4h5v2H4v-2z" />
    </svg>
  );
}

export default IconCertificate;
