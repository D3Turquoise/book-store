import Header from '../component/Header'
import Search from '../component/Searchbar'
import Toprated from '@/component/Toprated'

export default function Home() {
  return (
   <>
      <div className="m-5">
    <Search/>
    </div>
    <Header/>

      </>
  )
}