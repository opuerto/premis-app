import React from 'react';

const Nav = () => {
    return(
        <nav>
            <div className="contain">
                <div className="navigationbar">
                <div className="logo">
                        <img src="/assets/svg/P-logo.svg" width={38} height={65} className="logo-premis" alt="logo"/>
                   </div>
                   <div className="menu">
                        <a href="/">Um okkur</a>
                        <a href="/">vörur</a>
                        <a href="/">sagan</a>
                        <a href="/">
                        <img src="/assets/svg/facebook-logo-button.svg" with="29" height="25" alt="facebook"/>
                        </a>
                   </div>    
                </div>
                  
            </div> 
        </nav>
    );
}

export default Nav;