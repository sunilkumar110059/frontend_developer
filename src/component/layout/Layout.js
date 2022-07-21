import React from 'react';
import HeaderIndex from '../headerfooter/header/HeaderIndex';
import FooterIndex from '../headerfooter/footer/FooterIndex';

function Layout({ children }) {
    return (
        <>
            <div className="headerpart"> <HeaderIndex /></div>
            <div className="bodypart p-3"> {children} </div>
            <div className="footerpart"> <FooterIndex /></div>
        </>
    )
}

export default Layout