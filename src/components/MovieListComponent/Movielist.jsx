import React, { useEffect, useState } from 'react'
import './movielist.css'
// import Fire from '../../assets/fire.png'
import MovieCard from './MovieCard'
import axios from 'axios'
import FilterGroup from './FilterGroup'
import lodash from 'lodash'

const Movielist = ({type , title ,  emoji}) => {

    const [movies , setMovies] = useState([])
    const [filterMovies , setFilterMovies] = useState([])
    const [minRating , setMinRating] = useState(0)
    const [sort , setSort] = useState({
      by : "default",
      order : "asc"
    })
    let {by , order} = sort

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=205b0bd1b381e93ec4e63cea63706d44`).then((response) => {
        setMovies(response.data.results);
        setFilterMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


    useEffect (()=> {
      if (sort.by !== "default"){
          let sortedMovies = lodash.orderBy(filterMovies , [by], [order])
          setFilterMovies(sortedMovies)
      }

    })

    

    const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    let {name , value} = e.target
    setSort({...sort , [name]: value})
  }
  // console.log(sort);

  

  return (
    <section className='movie_list' id={type}>
        <header className='align_center movie_list_header'>
            <h2 className='align_center movie_list_heading'>{title} <img src={emoji} alt={`${emoji} icon`} className='navbar_emoji' /></h2>

            <div className='align_center movie_list_fs'>
                <FilterGroup minRating= {minRating} onRatingClick = {handleFilter} ratings={[8,7,6]}/>

                <select className='movie_sorting' name='by' value={by} onChange={handleSort}>
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>

                <select className='movie_sorting' name='order' value={order} onChange={handleSort}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                
                </select>

            </div>
        </header>

        <div className='movie_cards'>
          {
            filterMovies.map((movie)=>(
                <MovieCard key={movie.id} movie ={movie}/>

            ))
          } 
        </div> 

    </section>
  )
}

export default Movielist
