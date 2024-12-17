// icon:growth | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconGrowth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="beige"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M16.5 15a4.5 4.5 0 00-4.5 4.5m4.5-8.5a4.5 4.5 0 00-4.5 4.5M16.5 7a4.5 4.5 0 00-4.5 4.5M8 15c2.21 0 4 2.015 4 4.5M8 11c2.21 0 4 2.015 4 4.5M8 7c2.21 0 4 2.015 4 4.5M12 4v6" />
    </svg>
  );
}

export default IconGrowth;
