# Travailler avec l'api d'eventbrite
![enter image description here](https://www.billboard.com/files/styles/article_main_image/public/media/eventbrite-NEW-logo-2018-billboard-1548.jpg)
## Génération du token
1. Création d'un compte sur eventbrite 
2.  Rendez-vous dans les paramétres de votre compte dans la catégorie "Liens développeurs" et ensuite cliquer sur le bouton "Créer Une Nouvelle Application"

![enter image description here](https://screenshotscdn.firefoxusercontent.com/images/c6c4cb22-9300-4557-8aaf-647e0bbad261.png)


3. Renseigner toute les informations demandée, **pour l'URL de votre site une simple redirection vers votre localhost suffira**

![enter image description here](https://screenshotscdn.firefoxusercontent.com/images/d190d326-eba5-41d5-a447-7ffec6982dd7.png)

## Lister les événements

1. Installer postman une application qui vous permettra de tester les diffénrentes requétes que vous fairait à l'api!

![enter image description here](https://vignette.wikia.nocookie.net/underrated-films/images/c/c0/The_postman.jpg/revision/latest?cb=20180628191315)

2. Pour ce projet nous allons lister les événements par date pour ce faire rendez-vous dans la doc d'eventbrite sur la partie search events ou y sont décris toute les manipulation à faire pour utiliser l'api.!

![enter image description here](https://screenshotscdn.firefoxusercontent.com/images/bab4c5c4-0109-457e-920f-814527db1095.png)

3. Pour commencer listont les événements ayant une date entérieur au 2019/02/02. Pour ce faire  nous allons entrer  l'url d'accés à l'api
```
https://www.eventbriteapi.com/v3/events/search?start_date.range_end=2019-01-01T00:00:01Z
```
ainsi que le token nous permettant de nous autentifier

![enter image description here](https://i.stack.imgur.com/Fncvz.png)

# ReactJS

## Axios
1. Génération de notre app et placer vous à la racine

> npx create-react-app my-app

2. Installation d'axios 

>  npm install axios --save

3. Création d'un d'un dossier list dans lequel nous créons un fichier list.js qui sera notre component qui nous permettra de lister les événements et list.css d'aller un peux plus en profondeur dans la stylisation de notre component. 
```
my_app
└───node_modules
└───public 
└───src
│   └───components
│         └───list
│              │   list.js
|              |   list.css
```

4. Copier-coller le ci dessous

```jsx
import  React  from  'react';
import  axios  from  'axios';

export  default  class  PersonList  extends  React.Component {
  state  = {
    events: []
  }
  componentDidMount() {
    var  config  = {
      headers: {'Authorization':  "IJD5LMAP73QPM5EZYAYY"}
      };
    var  bodyParameters  = {
      key:  "value"
    }
    axios.get('https://www.eventbriteapi.com/v3/events/search/?&start_date.range_start=2017-05-10T11:11:48Z&start_date.range_end=2019-03-03T11:11:48Z&token=IJD5LMAP73QPM5EZYAYY',
    bodyParameters,
    config).then(res  => {
      var  events  =  res.data.events;
      this.setState({ events:events });
    }).catch((error) => {
    console.log(error);
    });
  }

  render() {
    return (
      <ul>
        {this.state.events.map(item => 
          <div>
            <li>{item.name.text}</li>
            <li>{item.start.local}</li>
          </div>
	  )
	}
      </ul>
    )
  }
}
```
5. Vous devriez avoir la liste de tout les événement ayant lieu à une date antérieure au 03/03/2019

## Design de notre app

![alt text](https://screenshotscdn.firefoxusercontent.com/images/e089b993-a227-4a28-b3fc-d36e52264dba.png "Logo Title Text 1")

Installer react-boostrap et inscrivez le cdn css liée à boostrap dans votre fichier index.html

> npm install react-bootstrap bootstrap


```
my_app
└───node_modules
└───public
│   │   index.html
└───src
```
```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
```
installer react-momment un component qui nous permettra de formater la date qui nous sera retourner par l'api.
>npm install --save moment react-moment
``` jsx
// src/component/list/list.js
import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/fr';
import { Button, Container, Row, Media } from 'react-bootstrap';
import './list.css';

export default class PersonList extends React.Component {
  state = {
    events: []
  }
  componentDidMount() {
    var config = {
        headers: {'Authorization': "IJD5LMAP73QPM5EZYAYY"}
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
        <Container>
          <Row className="justify-content-md-center">
            <ul className="list-unstyled">
              { this.state.events.map(item => {
                  var image = "";
                  var price = "";

                  item.logo == null ? image = '' : image = item.logo.url;
                  item.ticket_availability.minimum_ticket_price.value == '0' ? price = 'Gratuit' : price = item.ticket_availability.minimum_ticket_price.display;

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
                            <li>{item.venue.address.address_1}, {item.venue.address.city}</li>
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
          </Row>
        </Container>
    </div>
    )
  }
}
```
```css
/* src/component/list/list.css */

li.media {
    margin: 1%;
    padding: 1.5%;
    border-radius: 5px;
    transition: all 0.3s;
}

li.media:hover {
    box-shadow: 0px 0px 60px -50px black;
}

ul.list_info {
    list-style: none;
    padding: 0;
}

div.media-body {
    position: relative;
}

button.going {
    right: 3%;
    bottom: 3%;
    position: absolute;
    opacity: 0;
    transition: all 0.3s;
}
div.media-body:hover > button.going {
    opacity: 1;
}
```