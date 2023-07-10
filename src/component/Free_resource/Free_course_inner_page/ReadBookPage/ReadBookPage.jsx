import { useLoaderData } from "react-router-dom";

const ReadBookPage=()=>{

    const bookData = useLoaderData();
    console.log(bookData)
    const {bookName,description,imgFileName,imagePath} = bookData;
    return <div className="my-14 px-10">
    <div className="card w-full bg-white shadow-xl m-auto">
    <figure className="px-10 pt-10">
        <img src={`${"http://"+imagePath}/${imgFileName}`} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>{description}</p>
        <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>
        </div>
}

export default ReadBookPage;