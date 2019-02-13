# Art Education
This project is to give the user a chance to learn about artworks in the Cooper-Hewitt collections. The Cooper Hewitt, Smithsonian Design Museum, located in New York City, is the only museum in the nation devoted exclusively to historic and contemporary design. It is the mission of Cooper-Hewitt’s staff and board of trustees to advance the public understanding of design across the 240 years of human creativity represented by the museum’s collection. For more information on the museum: https://siarchives.si.edu/history/cooper-hewitt-national-design-museum

![alt text](./public/art_education.png)

The user comes to a landing page with a placeholder image of a Cooper-Hewitt museum exhibit and a list of artworks containing cards with basic information about the piece (title, medium). The list has two states, one that shows all the artworks available and another that will show all artworks the user has 'liked.' THe user can click the heart on an art card to add it to the 'likes' state. The user can click on an image to access more detailed information about the piece (description, if available, and credit) and the placeholder image will be replaced with a larger, detailed art card.

## This app is built with React, Node, Express, and utilizes the Cooper-Hewitt API.
The two main components are the art list and the art detail. The art list has individual art cards components, each with a like component, an image component, and title and medium information. The art list also has two show states, one for all artworks and another for cards the user has 'liked.' The art detail components offers a larger image and more detailed information about the piece if a user clicks on an art card. The user prompted that the card is clickable by a hover state that changes the background color and a pointer cursor. The like component stores a show state in the parent componentI set up a back end proxy in Node/Express to make the fetch call to the API and grab the data and keep the secret key out of the frontend code. The data is parsed in the container component and 


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses the [Cooper Hewitt API](https://collection.cooperhewitt.org/api/).

