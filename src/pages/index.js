import Header from '../component/Header'
import Search from '../component/Searchbar'
import SearchResult from '../component/SearchResult'
import SearchResultGenere from '../component/SearchResultGenere';
import Toprated from '../component/Toprated'
import Footer from '../component/Footer'
import axios from "axios";
import { useState } from "react";



export default function Home() {
  const [keyword, setKeyword] = useState("children");
  const [keyword2, setKeyword2] = useState();
  const [searchResults, setSearchResults] = useState(null);
  const [searchResults2, setSearchResults2] = useState([]);
  const [compType, setcompType] = useState("textbox");
  const [loading, setLoading] = useState(false);

  return (
    <>
         <Header keyword={keyword2} setKeyword2={setKeyword2} compType={compType} setcompType={setcompType} />
      <div className="m-5">
        <Search keyword={keyword} setKeyword={setKeyword} compType={compType} setcompType={setcompType}/>
      </div>
      { (compType === "navbar" )? (
        <>
 
      <div className="m-5">
      <SearchResultGenere keyword2={keyword2} searchResults={searchResults} setSearchResults={setSearchResults} />
        
      </div>
      </>
      ): ((compType === "textbox" && keyword && keyword!=="")? (

      <div className="m-5">
        <SearchResult keyword={keyword} searchResults={searchResults} setSearchResults={setSearchResults} />
      </div>
     ):(
     <div className="m-5">
      <Toprated keyword={keyword} searchResults2={searchResults2} setSearchResults2={setSearchResults2}/> 
      </div>
     
     ))};
      <div className='m-5'>
        <Footer />
      </div>
    </>
  )
}