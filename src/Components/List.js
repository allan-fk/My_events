import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Button, Media } from 'react-bootstrap';
import '../Stylesheet/components/List.css';

export default class List extends React.Component {
  state = {
    events: []
  }
  componentDidMount() {
    var config = {
        headers: {
          'Authorization': "IJD5LMAP73QPM5EZYAYY"
        }
    };

    var bodyParameters = {
       key: "value"
    }

    axios.get( 
      'https://www.eventbriteapi.com/v3/events/search/?&start_date.range_start=2017-05-10T11:11:48Z&start_date.range_end=2019-03-03T11:11:48Z&expand=ticket_availability,venue&token=IJD5LMAP73QPM5EZYAYY',
      bodyParameters,
      config
    ).then(res => {
        var events = res.data.events
        this.setState({ events:events });
    }).catch((error) => {
      throw error;
    });
  }
  render() {
    return (
      <div>
            <ul className="list-unstyled">
              { this.state.events.map(item => {
                  var image = "";
                  var price = "";

                  item.logo == null ? image = '' : image = item.logo.url;
                  item.venue == null ? item.venue = "" : item.venue = item.venue;
                 
                  item.ticket_availability.minimum_ticket_price.value === '0' ? price = 'Gratuit' : price = item.ticket_availability.minimum_ticket_price.display;

                  return (
                    <div>
                      <Media as="li">
                        <img
                          width={200}
                          height={100}
                          className="mr-3"
                          src= {image}
                          alt="Generic placeholder"
                        />
                        <Media.Body>
                          <h5>{item.name.text}</h5>
                          <ul className="list_info">
                            <li><Moment format="lll" locale="fr">{item.start.local}</Moment></li>
                            <li>{/*item.venue.address.address_1}, {item.venue.address.city*/}</li>
                            <li>{price}</li>
                          </ul>
                          <Button className="going">J'y vais</Button>
                        </Media.Body>
                      </Media>
                      </div>
                  )
                })
              }
            </ul>
        </div>
    )
  }
}
