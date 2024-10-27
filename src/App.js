import axios from "axios";
import React, { useEffect, useState } from "react";
import  Container  from "react-bootstrap/Container";
// import { ScrollContainer } from "react-nice-scroll";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar"
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState([])

  const getAllMovies = async ()=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dc467b40f93f59199517aa00b0c8f2e2&language=ar')
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  const getPage = async (pageNum)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dc467b40f93f59199517aa00b0c8f2e2&language=ar&page=${pageNum}`)
    setMovies(res.data.results)
  }

  useEffect(() =>{
    getAllMovies()
  }, [])

  const search = async (word)=>{
    if(word === ""){
      getAllMovies()
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc467b40f93f59199517aa00b0c8f2e2&query=${word}&language=ar`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }

  return (
    // <ScrollContainer alwaysShowTracks={true}>
      <div className="font color-body">
        <NavBar search={search} />
        <Container>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} pageCount={pageCount} getPage={ getPage} />}/>
            <Route  path="/movie/:id" element={  <MovieDetails />}/>
          </Routes>
          </BrowserRouter>
        </Container>
      </div>
    // </ScrollContainer>
  );
}

export default App;
