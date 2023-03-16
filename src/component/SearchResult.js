import axios from "axios";
import { useState, useEffect } from "react";

export default function SearchResult({keyword,searchResults,setSearchResults}) {
  const [loading, setLoading] = useState(false);

  const getResults = async (keyword) => {
    try {
       console.log("keyword is "+keyword)
      // Replace space with '+'
      let search = keyword.replace(/ /g, "+");
      setLoading(true);
      const { data } = await axios.get("api/search/"+search);
      // Add the data to the results state
      console.log(data.items)
      setSearchResults(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResults(keyword)
},[keyword])

  return (
    <div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
      {/* <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
        <span className="text-active">Books</span> Search
      </h1> */}
      {/* <form
        className="sm:mx-auto mt-10 justify-center sm:w-full sm:flex"
        onSubmit={(e) => {
          getResults();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="flex w-full sm:w-1/3 rounded-lg px-5 py-3 text-base text-background font-semibold focus:outline-none focus:ring-2 focus:ring-active"
          placeholder="Enter the book's title"
          defaultValue={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setSearchResults(null);
          }}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-lg px-5 py-3 bg-active text-base text-primary font-bold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            type="submit"
          >
            {loading ? (
              <span className="animate-pulse">Loading..</span>
            ) : (
              <>Search</>
            )}
          </button>
        </div>
      </form> */}

      {
      searchResults && (
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            {searchResults.map((book, index) => {
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-light rounded-lg px-4 pb-8">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            // Removes compression to get higher quality
                            book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
                          }
                          className="p-2 w-64 rounded-lg"
                          alt={book.volumeInfo.title}
                        />
                      </div>
                      <div className="text-center justify-center items-center">
                        <h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
                          {book.volumeInfo.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-secondary">
                          {book.saleInfo.listPrice && book.saleInfo.listPrice.amount}
                        </p>
                        <span className="font-bold text-secondary">
                          Rating: {book.rating}
                        </span>
                        <a
                          href={book.url}
                          className="mt-4 block text-active underline"
                        >
                          Read More
                          <input type="submit" value="add" onClick={() => addToCart(el)} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
