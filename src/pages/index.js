import Header from '../component/Header'
import Search from '../component/Searchbar'
import Toprated from '../component/Toprated'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <>
      <div className="m-5">
        <Search />
      </div>
      <Header />
      <div className='m-5'>
        <Toprated />
      </div>
      <div className='m-5'>
        <Footer />
      </div>
    </>
  )
}