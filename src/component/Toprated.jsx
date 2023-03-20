import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Toprated({keyword,searchResults2,setSearchResults2}) {
  const [loading, setLoading] = useState(false);

  // var finalElement = []; 
  //  const addTofinal = (dat) => {
  //     finalElement.push(dat)
  //  };

  const keyword3="Top Rated Books";
  const getResults = async (keyword) => {
    var finalElement = []; 
      try {
      if(!keyword ){
        //console.log("keyword in toprated "+keyword)
        setLoading(true);
      // Replace space with '+'
      //let search = keyword.replace(/ /g, "+");
       const { data } = await axios.get("api/topsearch/")
       //console.log(data)
  
       //data.forEach(async element => {
       for(const element of data){
        //console.log(element)
        if (  typeof element.isbns !== 'undefined' && element.isbns && (element.isbns).length>0 && (element.isbns[0].isbn10).length>0){
          // console.log(element.isbns[0].isbn10)
          const searchtopvar =element.isbns[0].isbn10
          const output = await axios.get("api/searchtop/"+searchtopvar); 
          finalElement.push(output.data.items[0]);
          
          //addTofinal(output.data.items[0]);
          // console.log("start");
          // console.log(output.data.items[0]);
          // console.log("end");
          }

     

      
        //console.log("This is final element start")
 
           //console.log("This is final element end 2")
          };
       //console.log(finalElement)
       setSearchResults2(finalElement);
       //console.log("This is final element end")
       //console.log(finalElement)
          console.log(finalElement)
          setLoading(false);
          
       // setSearchResults2(finalElement);
      //const parsed = JSON.parse(data);
      // console.log("this is result first")
      // console.log(data)
      //   console.log(data[0].isbns[0].isbn10)
      //   const items = await axios.get("api/searchtop/"+data[0].isbns[0].isbn10);  
      //   console.log(items.data)

      //finalElement = [...finalElement, array1 ];
      //console.log("this is final element"+finalElement)
  
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
      <h1 className="flex flex-1 text-5xl flex-col justify-between mt-4 text-center">
      <span className="text-active text-break">Books Search for: {keyword3}</span>
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
                let image = {
                  id: i,
                  height: 100,
                  url: thumbnail,
                  width: 100,
                };

                if (thumbnail) {
                  return (
                    <div
                      key={i}
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
                            console.log("add");
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
