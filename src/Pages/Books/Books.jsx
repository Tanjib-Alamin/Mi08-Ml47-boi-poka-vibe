import React, { Suspense,  useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllbooks] = useState([]);

     
        

    return (
        <div className='text-3xl text-center p-6'>
            <Suspense fallback={<span>Loading....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                   data.map((singlebook)=><Book key={singlebook.bookId} singlebook={singlebook}></Book>)
                }
                </div>
           </Suspense>
        </div>
    );
};

export default Books;