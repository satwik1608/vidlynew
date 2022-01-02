import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService.js'
class Movies extends React.Component {


    state = {
        movies : getMovies()
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id!==movie._id);

        this.setState({movies});
    }

    render() { 
        const { length: count } = this.state.movies;

        if(count === 0) return <p>No movies in the Database</p>
        
        return (
        <React.Fragment>

           <p>Showing {count} movies in the list</p>
           <table className="table">
               <thead>
                   <tr>
                       <th>Title</th>
                       <th>Genre</th>
                       <th>Stock</th>
                       <th>Rate</th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   {this.state.movies.map(movie =><tr key = {movie._id}> 
                       <td>{movie.title}</td>
                       <td>{movie.genre.name}</td>
                       <td>{movie.numberInStock}</td>
                       <td>{movie.dailyRentalRate}</td>
                       <button onClick =  {() => this.handleDelete(movie)} class="btn btn-danger btn-sm">Delete</button>
                   </tr>) }
                   
               </tbody>
           </table>
       </React.Fragment>
        )
        
    }
}
 
export default Movies;