import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
    return (
        <section>
            <Header />
                {props.children}
            <Footer />
        </section>
       
    );
}

export default Layout;