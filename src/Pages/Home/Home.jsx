import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Home = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>hello</h1>
            <Banner></Banner>
            <Books data={data}></Books>
            
        </div>
    );
};

export default Home;