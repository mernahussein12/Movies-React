import React from 'react'
import {Row } from 'react-bootstrap'
import CardMovie from "./CardMovie"
import  PaginationComponent from './Pagination'
const MovieList = ({movies, getPage, pageCount}) => {
  return (
   
    <Row style={{paddingTop: '100px'}}>
       
      {movies.length >= 1 ? (movies.map((mov)=>{
        return( <CardMovie key={mov.id} mov={mov} />)
      })) : <h1> لا يوجد افلام....</h1>}
      {movies.length >= 1 ? ( <PaginationComponent getPage={getPage} pageCount={pageCount}/>) : null}

    
    </Row>
   
  );
};

export default MovieList 