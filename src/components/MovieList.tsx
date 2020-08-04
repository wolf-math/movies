import React, { Component } from 'react';
import axios from 'axios';

class MovieList extends React.Component {
    state = {
        movies : []
    };

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/600?api_key=e5c11f114654078cdd16ed8de91aedf0`)
        .then(res => {
            console.log(res);
            this.setState({ persons: res.data});
        });
    }

    render() {
        return (
            <>
               Movies!
            </>
        )
    }
}

export default MovieList