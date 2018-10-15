import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contain">
            <div className="footer-box">
                <div className="footer-box__left">
                    <div className="premis-info">
                        <div className="premis-info__logo">
                            <img
                                src="/assets/svg/premis-logo.svg"
                                className="logo"
                                alt="footer logo"
                            />
                        </div>
                        <div className="premis-info__address">
                            <p>
                                Holtavegur 10 104 Reykjavík 547 0000 info@premis.is Kt.
                                540199-2569 Vsk. nr. 61001
                            </p>
                        </div>
                    </div>
                    <div className="premis-menu">
                        <span className="premis-menu__title">
                            VEFTRÉ
                        </span>
                        <ul className="premis-menu__ul">
                            <li><a href="/">Um okkur</a></li>
                            <li><a href="/">Vörur</a></li>
                            <li><a href="/">Sagan</a></li>
                        </ul>    
                    </div>
                </div>
                <div className="footer-box__right">
                    <div className="footer-social">
                        <span className="footer-social__title">SAMFÉLAGSMIÐLAR</span>
                        <ul className="footer-post__ul">
                            <li><a href="/"><img src="/assets/svg/facebook-logo-button-f.svg" width="32" height="32" alt=""/></a></li>
                            <li><a href="/"><img src="/assets/svg/instagram-logo.svg" width="32" height="32" alt=""/></a></li>
                            <li><a href="/"><img src="/assets/svg/twitter-logo-button.svg" width="32" height="32" alt=""/></a></li>
                            <li><a href="/"><img src="/assets/svg/dribble-logo-button.svg" width="32" height="32" alt=""/></a></li>
                        </ul> 
                    </div>
                    <div className="footer-post">
                    <span className="footer-post__title">PÓSTLISTI</span>
                       <div className="footer-post__text">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                       </div>
                       <div className="footer-post__input">
                         <img src="/assets/svg/envelope.svg" className="input-envelope" alt="envelope"/>
                         <input placeholder="Sláðu inn netfang" className="post-input" type="text"/>  
                       </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
