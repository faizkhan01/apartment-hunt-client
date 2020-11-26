import React from 'react';
import Footer from '../ShearCompo/Footer';
import Header from '../ShearCompo/Header';
import HeaderBottom from '../ShearCompo/HeaderBottom';
import Review from '../ShearCompo/Review';
import Services from '../ShearCompo/Services';
import './Home.scss';

const Home = () => {
    document.title = "Apartment Hunt Home";
    return (
        <div style={{backgroundColor:"#F0F5F3"}}>
           <Header />
           <HeaderBottom />
           <main id="main" className="container">
                <Services />
           </main>
           <Review />
           <Footer />
        </div>
    );
};

export default Home;