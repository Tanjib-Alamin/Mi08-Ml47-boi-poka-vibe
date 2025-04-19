import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Components/Utility/AdToDb';
import Book from '../Book/Book';

const ReadList = () => {

    const [readlist, setReadlist] = useState([]);
    const [sort, setSort] = useState();
    const data = useLoaderData();
    

    useEffect(() => {
        const storedBookData = getStoreBook();
        const convertestoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertestoredBooks.includes(book.bookId));
        setReadlist(myReadList);
    },[])

    const handelSort = (type) => {
        setSort(type);
        if (type === "pages") {
            const sortedBypage = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
            setReadlist(sortedBypage);
        }
          if (type === "ratings") {
            const sortedByRating = [...readlist].sort((a, b) => a.rating - b.rating);
            setReadlist(sortedByRating);
        }
        
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">sort by: {sort?sort: "" }</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handelSort("pages")}><a>pages</a></li>
                    <li onClick={()=>handelSort("ratings")}><a>ratings</a></li>
                </ul>
            </details>
             <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read {readlist.length} </h2>
                    {
                        readlist.map(b=> <Book key={b.bookId } singlebook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My whished List </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;