import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigation } from 'react-router-dom';
import Banner from '../components/Banner';
import BooksContainer from '../components/BooksContainer';
import Loader from '../components/Loader';

const Home = () => {

    const navigation = useNavigation();
    if(navigation.state === 'loading') return <Loader />;

    return (
        <div className='lg:ml-16 lg:mr-16 mx-auto'>
            <Helmet>
                <title>Book Store | Home</title>
            </Helmet>
            <Banner></Banner>
            <BooksContainer></BooksContainer>
        </div>
    );
};

export default Home;