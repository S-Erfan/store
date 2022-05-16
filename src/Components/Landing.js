import React from 'react';

//components
import Baner from './shared/Baner';
import TopPro from './shared/TopPro';
import SearchBox from './SearchBox';
import Logos from './Logos';
import Footer from './Footer';

const Landing = () => {
    return (
        <div style={{marginTop: "80px"}}>
            <Baner />
            <TopPro />
            <SearchBox />
            <Logos />
            <Footer />
        </div>
    );
};

export default Landing;