import Image from "next/image";
import Link from "next/link";

export default function Header({keyword2,setKeyword,setKeyword2,compType, setcompType, showCheckout, setShowCheckout,cartItemCount}) {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <div className="mr-3"><Image src={"/logo.png"} width={100} height={100} alt="logo" ></Image></div>     
      <span class="font-semibold text-4xl tracking-tight">BookWorld</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        <button href="#responsive-header" value="Home" onClick={(e) => { e.preventDefault();  setKeyword(null); setShowCheckout(false); setcompType("topratedbook") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Home
          </button>
          <button href="#responsive-header" value="Fiction" onClick={(e) => { e.preventDefault();  setKeyword2(e.target.value); setShowCheckout(false); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Fiction
          </button>
          <button href="#responsive-header" value="Crime" onClick={(e) => { e.preventDefault();  setKeyword2(e.target.value); setShowCheckout(false); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Crime
          </button>
          <button href="#responsive-header" value="Sport" onClick={(e) => { e.preventDefault();  setKeyword2(e.target.value); setShowCheckout(false); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Sport
          </button>
          <button href="#responsive-header" value="Science+Fiction" onClick={(e) => { e.preventDefault();  setKeyword2(e.target.value); setShowCheckout(false); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Science Fiction
          </button>
          <button href="#responsive-header" value="Children" onClick={(e) => { e.preventDefault();  setKeyword2(e.target.value); setShowCheckout(false); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Children
          </button>
          <button href="#responsive-header" hidden="true" value="topratedbook" onClick={(e) => { e.preventDefault();  setKeyword(null); setShowCheckout(false);setcompType("topratedbook") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
              Top Rated Books
          </button>          
        </div>
        { !showCheckout &&
        <div className='relative' role='button' onClick={() => {setShowCheckout(!showCheckout)}}>
      <div className='absolute rounded-full text-white bg-green-700 w-7 h-7 p-1 text-sm text-center'>
        <span>{cartItemCount}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>
    </div>
     }
      </div>
    </nav>
    </>
    )
}
