import React , {useState, useEffect} from 'react'
import axios from "axios";
import { Col, Row } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom'
import LightSpeed from 'react-reveal/LightSpeed';

const MovieDetails = () => {
  const param = useParams();
 const [movie, setMovie] = useState([]);
  console.log (param.id);
  // get movies bt details
  const getMovieDetails = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=dc467b40f93f59199517aa00b0c8f2e2&language=ar`)
  
    setMovie(res.data)
  
  }
  useEffect(() => {
    getMovieDetails();
    
    
  }, []);
  return (
    <div>
        <Row className='justify-content-center fs-3 fw-bold text-end' style={{paddingTop: '100px'}}>
          <Col md="12" xs="12" sm="12" className="mt-4">
         < LightSpeed left >
          <div className="card-detalis d-flex align-items-center">
        <img  className="img-movie w-25" src={`https://image.tmdb.org/t/p/w500`+ movie.poster_path}
         alt="ascad" />
        <div className=" justify-content-center text-center mx-auto">
          <p className="card-text-details border-bottom"> {movie.title}  </p>
          <p className="card-text-details border-bottom">تاريخ الفيلم :{movie.release_date}</p>
          <p className="card-text-details border-bottom">عدد المقييمون:{movie.vote_count}</p>
          <p className="card-text-details border-bottom"> التقييم:{movie.vote_average}</p>
        </div>
          </div>
          </LightSpeed >
          </Col>
        </Row>

        <Row className="justify-content-center">
         <Col  md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصه :</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">قصه الفيلم :{movie.overview}</p>
            </div>
          </div>
         </Col>
        </Row>

         <Row className="justify-content-center">
         <Col md="10" xs="12" sm="12" className="mt-2 d-flex
          justify-content-center">
            <Link to="/">
         <button
          style={{  backgroundColor:"#24b4aa", border: "none"}}
          className="btn btn-primary mx-2">
            عوده للصفحه الرئيسيه
         </button>
         </Link>
         <a href={movie.homepage} >
         <button
          style={{  backgroundColor:"#24b4aa", border: "none"}}
          className="btn btn-primary">
            مشاهده الفيلم  
         </button>
         </a>
         </Col>
         </Row>

    </div>
  )
}

export default MovieDetails