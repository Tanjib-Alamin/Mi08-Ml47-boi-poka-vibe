import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoreToDb } from '../../Components/Utility/AdToDb';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, image } = singleBook;


    const handelMarkAsRead = id => {

        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
             
                MySwal.showLoading()
            },
            }).then(() => {
            return MySwal.fire(<p>Shorthand works too</p>)
        })

        addStoreToDb(id);
    }


    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-64' src={image} alt="" />
            <h1>{bookName}</h1>
            <button onClick={()=>handelMarkAsRead(id)} className="btn btn-accent m-3">Mark as Read</button>
            <button className="btn btn-info m-3 ">Add To WishList</button>
        </div>
    );
};

export default BookDetails;