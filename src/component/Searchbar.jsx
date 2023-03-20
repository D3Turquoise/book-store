import axios from "axios";
import { useState } from "react";

export default function Search({keyword,setKeyword,compType, setcompType}) {
return (
<div className="flex justify-center mt-4">
  <div className="m-5 xl:w-1/3">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="search"
        className="text-5xl text-center text-bold relative m-0 block  w-full flex-auto rounded border-4 border-solid border-green-500 bg-dark bg-clip-padding px-3 py-1.5 text-base font-semibold text-teal-700 outline-2 transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-dark-600 dark:text-neutral-500 dark:placeholder:text-teal-500"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" value={keyword} onChange={(e) => {setKeyword(e.target.value); setcompType("textbox") } } />
    </div>
  </div>
</div>
    )
}
