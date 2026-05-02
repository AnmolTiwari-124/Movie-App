 
import MovieCard from './components/Moviecard'
import Home from './pages/Home'
import './css/App.css'
import { Route,Routes } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'

function App(){
  return(
    <main className='main-content'>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Favorites' element={<Favourites/>} />
      </Routes>
    </main>
  )
}

export default App


 {/* <MovieCard movie ={{title:"titanic", release_date : 2004}} /> */}