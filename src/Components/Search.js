import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import '../Stylesheet/components/Search.css';

export default class Search extends React.Component  {
  render() {
    return (
        <div>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
            </Form>
        </div>
    );
  }
}