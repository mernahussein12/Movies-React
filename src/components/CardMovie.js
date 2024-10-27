import React from 'react'
import {Col} from 'react-bootstrap/Col'
import { Link} from 'react-router-dom'
import RubberBand from 'react-reveal/RubberBand';

const CardMovie = ({mov}) => {

  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-3">
       <RubberBand>
      <Link to={`/movie/${mov.id}`}>
       <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500`+mov.poster_path} className='card_image' alt='img' />
        <div className="card_overlay">
         <div className="overlay_text text-center w-100 p-2">
           <p> اسم الفيلم : {mov.original_title} </p>
           <p> تاريخ الاصدار :{mov.release_date}</p>
           <p> المقييمون : {mov.vote_count}</p>
           <p> التقييم : {mov.vote_average}.</p>
         </div>
        </div>
       </div>
      </Link>
      </RubberBand>
    </Col>
  )
}

export default CardMovie;
