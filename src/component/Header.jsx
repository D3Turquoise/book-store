import Image from "next/image";
import Link from "next/link";

export default function Header({keyword2,setKeyword2,compType, setcompType}) {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div><Image src={"/logo.png"} width={100} height={100}></Image></div>      
        <span className="font-semibold text-xl tracking-tight">BookWorld</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button href="#responsive-header" value="Fiction" onClick={(e) => { e.preventDefault(); console.log("i am in header"); setKeyword2(e.target.value); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Fiction
          </button>
          <button href="#responsive-header" value="Crime" onClick={(e) => { e.preventDefault(); console.log("i am in header"); setKeyword2(e.target.value); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Crime
          </button>
          <button href="#responsive-header" value="Sport" onClick={(e) => { e.preventDefault(); console.log("i am in header"); setKeyword2(e.target.value); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Sport
          </button>
          <button href="#responsive-header" value="Science+Fiction" onClick={(e) => { e.preventDefault(); console.log("i am in header"+e.target.value); setKeyword2(e.target.value); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Science Fiction
          </button>
          <button href="#responsive-header" value="Children" onClick={(e) => { e.preventDefault(); console.log("i am in header"+e.target.value); setKeyword2(e.target.value); setcompType("navbar") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
            Children
          </button>
          <button href="#responsive-header" value="topratedbook" onClick={(e) => { e.preventDefault(); console.log("i am in header"+e.target.value); setKeyword2(null); setcompType("topratedbook") }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-3xl">
              Top Rated Books
          </button>          
        </div>
        <div>
          <a href="#" className="flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt- text-2xl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="mr-4 w-6 h-6">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg> Shopping cart</a>
        </div>
      </div>
    </nav>
    </>
    )
}
