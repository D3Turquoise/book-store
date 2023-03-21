import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Toprated({keyword,setKeyword,searchResults2,setSearchResults2, addToCart}) {
  const [loading, setLoading] = useState(false);

  const keyword3="Top Rated Books";
  const getResults = async (keyword) => {
    var finalElement = []; 
      try {
      if(!keyword ){
        setLoading(true);
       const { data } = await axios.get("api/topsearch/")
  
       for(const element of data){
        if (  typeof element.isbns !== 'undefined' && element.isbns && (element.isbns).length>0 && (element.isbns[0].isbn10).length>0){
          const searchtopvar =element.isbns[0].isbn10
          const output = await axios.get("api/searchtop/"+searchtopvar); 
          finalElement.push(output.data.items[0]);

          }


          };
       setSearchResults2(finalElement);
          setLoading(false);
          
      }
    } catch (error) {
      setLoading(false);
    }
  };

   useEffect(() => {
     getResults(keyword)
 },[])

 return (
  <>
 <div className="flex justify-center">
    <h1 className="flex flex-1 text-3xl flex-col justify-between mt-4 text-center">
      <span className="text-active">Books Search for: {keyword3}</span>
    </h1>
    </div>
    <div className="flex justify-center">
    <h2 className="flex flex-1 flex-col text-2xl  justify-between mt-4 text-center"
          type="submit"
        >
          {loading ? (
            <span className="text-active">Loading...</span>
          ) : (
            <></>
          )}
      </h2>
      </div>

    {!loading && searchResults2 && (
      <div className="flex justify-center">
        <div className="p-4">
          <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {searchResults2.map((item, i) => {
              let thumbnail =
                item.volumeInfo.imageLinks &&
                item.volumeInfo.imageLinks.smallThumbnail;
              let amount =
                item.saleInfo.listPrice && item.saleInfo.listPrice.amount||8.0;
              let title = item.volumeInfo.title;
 
              const el =    {
                id: item.id,
                volumeInfo: {
                  title: title,
                  imageLink: thumbnail,
                },
                saleInfo: {
                  listPrice: amount
                },
                quantity: 0,
              };

              if (thumbnail) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-1 flex-col justify-between mt-4"
                  >
                    <img
                      className="object-object-none object-center m-auto w-flex"
                      src={thumbnail}
                      alt=""
                    />
                    <div className=" m-3 text-center wrap-text">
                      <div>{item.volumeInfo.title}</div>
                    </div>
                    <div className="m-3 text-center">
                      <span>${amount}</span>
                    </div>
                    <div className="object-object-none object-center text-center">
                      <button
                        className="text-white bg-teal-500 m-3 p-3 align-self-end"
                        onClick={() => {
                          addToCart(el);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              }
            }
            )
            }
          </div>
        </div>
      </div>
    )}
  </>
);
}
