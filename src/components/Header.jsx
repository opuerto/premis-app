import React from 'react';
import Nav from './Nav';
const Header = (props) => {
    return (
        <section className="Header">
            <Nav />
            <figure className="arrow-down">
                <img src="assets/svg/down-arrow.svg" width={50} height={40} alt="arrow-down"/>
            </figure>
        </section>
    );
}

export default Header;