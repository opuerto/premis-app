import React from "react";
import Nav from "./Nav";
const Header = props => {
  return (
    <div>
      <section className="Header">
        <Nav />
        <figure className="arrow-down">
          <img
            src="assets/svg/down-arrow.svg"
            width={50}
            height={40}
            alt="arrow-down"
          />
        </figure>
      </section>
      <div className="stroke">
        <img src="/assets/stroke.png" alt=""/>
      </div>
    </div>
  );
};

export default Header;
