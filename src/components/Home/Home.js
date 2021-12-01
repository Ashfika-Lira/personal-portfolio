import React from 'react';
import SingleProject from '../SingleProject/SingleProject';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {

    return (
        <div className="container">
            <Banner></Banner>
            <SingleProject></SingleProject>
			<ContactMe></ContactMe>
        </div>
    );
};

export default Home;