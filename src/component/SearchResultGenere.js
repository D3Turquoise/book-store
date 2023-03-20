import axios from "axios";
import { useState, useEffect } from "react";

export default function SearchResultGenere({keyword2,searchResults,setSearchResults}) {
  const [loading, setLoading] = useState(false);

  const getResults = async (keyword2) => {
    try {
      if ( keyword2 !== null){
       console.log("keyword is "+keyword2)
      // Replace space with '+'
      let search = keyword2.replace(/ /g, "+");
      setLoading(true);
      const { data } = await axios.get("api/generesearch/"+search);
      // Add the data to the results state
      console.log(data.items)
      setSearchResults(data.items);
      setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResults(keyword2)
},[keyword2])

  return (
    <>
   <div className="flex justify-center">
      <h1 className="flex flex-1 text-5xl flex-col justify-between mt-4 text-center">
        <span className="text-active">Books Search for: {keyword2}</span>
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

      {!loading && searchResults && (
        <div className="flex justify-center">
          <div className="p-4">
            <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {searchResults.map((item, i) => {
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
