import { useEffect, useState } from "react";
import "./Free_course_inner_page.css";
import axios from "axios";

import { Link } from "react-router-dom";
import eBookUrl from "../../../api/bootApi";
const E_Books=()=>{


    const [bookData, setBookData]= useState([]);
    const getEbookData=()=>{
        axios.get(`${eBookUrl}/ebook`)
        .then(response => {
            console.log(response.data)
            setBookData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    useEffect(()=>{
        getEbookData();
    },[])

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 mx-auto gap-y-7 my-14">
            {
                bookData.map(data=>
                   <Link to={data._id} key={data._id}>
                    <div className="card w-[350px] rounded-none bg-white shadow-xl mx-auto cursor-pointer">
                   <div className="container">
                   <figure><img className="image" src={"http://"+data?.imagePath} alt="Shoes" /></figure>
                    <div className="middle w-full">
                        <h1 className="text text-xl font-semibold">{data?.bookName}</h1>
                    </div>
                   </div>
                    <div className="card-body px-3 py-6">
                      <h2 className="card-title text-gray-950 text-lg leading-7 font-serif" title={data.description
                    }
                    dangerouslySetInnerHTML={{
                        __html:
                          data.description?.replace(/<[^>]+>/g, "").length >= 50
                            ? data.description?.replace(/<[^>]+>/g, "").slice(0, 55) + "..."
                            : data.description?.replace(/<[^>]+>/g, "")
                      }}
                    >
                      </h2>
                      <div className="card-actions justify-end mt-2">
                        <Link to={`${data._id}`}>
                        <button className="bg-[#ffffff] text-[13px] border-[2px] border-[#D82027] hover:bg-[#D82027] hover:text-white text-sm rounded-none w- h-[36px] w-[103px] uppercase">Know more</button>
                        </Link>
                      </div>
                    </div>
                  </div> 
                   </Link>
                    )
            }
        </div>
    )
}

export default E_Books;