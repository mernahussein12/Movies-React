import React from 'react'
import Col   from 'react-bootstrap/Col';
import Row  from'react-bootstrap/Row';
import Container    from "react-bootstrap/esm/Container";
import avatar from "../imges/mm.gif"
import SwitchTheme from './SwitchThime';
const NavBar =({ search })=> {

  const onSearch = (word) => {
   search(word)
  }
  return (
    <div className="nav-style w-100 pt-2 fixed-top">
            <Container>
                <Row>
                    <Col xs="2" lg="2">
                        <a href='/'>
                            <img className='logo' src={avatar} alt='logo' />
                        </a>
                    </Col>
                    <Col xs="8" lg="8" className='d-flex align-items-center text-center'>
                        <div className='search w-100 d-flex align-items-center'>
                            {/* <i className='fa fa-search' color='primary'></i> */}
                            <input bgcolor="background.body" onChange={(e) => onSearch(e.target.value)} type="text" className='form-control w-100' placeholder='ابحث' />
                        </div>
                    </Col>
                    <Col xs="2" lg="2" className='d-flex align-items-center text-center'>
                        <SwitchTheme />
                    </Col>
                </Row>
            </Container>
        </div>
  );
};



export default NavBar