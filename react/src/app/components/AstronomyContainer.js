import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { API_KEY } from 'babel-dotenv';
import axios from 'axios';

class AstronomyContainer extends Component {

    constructor() {
        super()

        this.state = {
            astronomy: []
        }
    }


    componentDidMount() {
        const END_POINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        
        axios.get(END_POINT)
          .then(response => {
              this.setState({ astronomy : response.data });

              console.log(this.state.astronomy);
          })
          .catch(err => {
              console.log(err, "Failed to fetch data");
          });
    }

    render() {

        const { astronomy } = this.state;
        return (
            <AstronomyCard data={astronomy} /> // passed in to AstronomyCard as props.data
        )
    }
}

export default AstronomyContainer;