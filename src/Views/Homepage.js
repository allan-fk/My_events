import React from 'react';
import { List, Header, Menue, Search, Osm }  from '../Components';
import { Row, Col }  from 'react-bootstrap';
import '../Stylesheet/views/Homepage.css';

export default class Homepage extends React.Component  {
  render() {
    return (
      <div className="App">
        <div className='Container-full'>
          <Header />
          <Row>
            <Col sm={2}>
              <Menue />
            </Col>
            <Col sm={6}>
              <Search />
              <List />
            </Col>
            <Col sm={3}>
              <Osm />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}