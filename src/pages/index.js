import Header from '../component/Header'
import Search from '../component/Searchbar'
import SearchResult from '../component/SearchResult'
import Toprated from '../component/Toprated'
import Footer from '../component/Footer'
import Checkout from '@/component/Checkout'
import axios from "axios";
import { useState } from "react";



export default function Home() {
  const [keyword, setKeyword] = useState("React");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  function renderContent() {
    if (showCheckout) {
      return (
        <div>
          <Checkout />
        </div>
      )
    } else {
      return (
        // starting original
        <>
          <div className="m-5">
            <Search keyword={keyword} setKeyword={setKeyword} />
          </div>
          {!keyword ? (
            <>

              <div className="m-5">
                <Toprated />
              </div>
            </>
          ) : (

            <div className="m-5">
              <SearchResult keyword={keyword} searchResults={searchResults} setSearchResults={setSearchResults} />
            </div>
          )}
        </>
        // end orginal
      )
    }
  }

  return (
    <>
      <Header />
      <button onClick={() => {setShowCheckout(true)}}>See Checkout</button>
      {renderContent()}
      <div className='m-5'>
        <Footer />
      </div>
      <div>

      </div>
    </>
  )
}