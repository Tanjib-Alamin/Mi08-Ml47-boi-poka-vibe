const getStoreBook = () => {
    const storedBookstr = localStorage.getItem("readlist");

    if (storedBookstr) {
        const storedBookdata = JSON.parse(storedBookstr);
        return storedBookdata;

    }
    else {
        return []
    }
}

const addStoreToDb = (id) => {
    
    const storeBookedata = getStoreBook();

    if (storeBookedata.includes(id)) {
        alert('already exist');        
    }
    else {
        storeBookedata.push(id);
        const data = JSON.stringify(storeBookedata);
        localStorage.setItem("readlist", data);

    }
}

export {addStoreToDb,getStoreBook}
