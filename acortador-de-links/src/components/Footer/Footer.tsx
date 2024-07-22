import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="bg-slate-900 text-white text-base text-center py-5">
      Copyright &#169; Acortador de Links | José Albornoz
    </div>
  );
};

export default Footer;
