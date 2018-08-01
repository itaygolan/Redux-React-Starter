import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { API_KEY } from 'babel-dotenv';
import axios from 'axios';
import { connect } from 'react-redux';


// Import astronomy state action and pass into connect function
import fetchData from '../../actions/fetch_data';

class AstronomyContainer extends Component {

    componentDidMount() { // do state stuff in componentDidMount
        // call fetchData() -- funciton in props from redux action
        // astronomy is changed because AppReducer action runs on astronomy redux state
        this.props.fetchData();
    }

    render() {
        return (
            <AstronomyCard data={this.props.astronomy} /> // passed in to AstronomyCard as props.data
        )
    }
}

// ***** Connect react with redux *****

// mapStateToProps (necessity) -- maps Redux state to React props
// (fetch data and pass it down via props)

// In reducers/index.js we had the astronomy reducer, we're just mapping the redux 
// state to props so it can be accessed through this.props.astronomy
function mapStateToProps (state) {
    return { astronomy: state.astronomy }
}

// mapDispatchToProps (optional) : maps our actions to props (fetching data)


// connect takes two arguments -- mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, { fetchData })(AstronomyContainer);