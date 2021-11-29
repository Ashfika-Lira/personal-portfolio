import React from 'react';
// import Projects from '../Projects/Projects';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {

    return (
        <div className="container">
            <Banner></Banner>
            {/* <Projects></Projects> */}
			<ContactMe></ContactMe>
        </div>
    );
};

export default Home;