import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="bg-slate-900">
      <div className="container p-2 mx-auto"></div>
      <nav className="py-5">
        <div className="text-base text-white">Acortador de Links</div>
      </nav>
    </div>
  );
};

export default Header;
