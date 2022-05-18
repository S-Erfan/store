import React from 'react';

//components
import Baner from './shared/Baner';
import TopPro from './shared/TopPro';
import SearchBox from './SearchBox';
import Logos from './Logos';

const Landing = () => {
    return (
        <div style={{marginTop: "80px"}}>
            <Baner />
            <TopPro />
            <SearchBox />
            <Logos />
        </div>
    );
};

export default Landing;