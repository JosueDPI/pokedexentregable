import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeContainer.css'
import PokeCard from './PokeCard'
import Pagination from '../Pagination'

 
const PokeContainer = ({formUrl}) => { 

  const [loading, setLoading] = useState(false)
  
  const [pokemons, getAllPokemons] = useFetch(formUrl)
  
  
  useEffect(() => {
    
    getAllPokemons()
    
  }, [formUrl])
  
  const [currentPage, setCurrentPage] = useState(1)

  const [pokemonsPerPage, setPokemonsPerPage] = useState(8)

  const indexOfLastPokemon = currentPage * pokemonsPerPage

  const indexOfFirstPokemon = indexOfLastPokemon -  pokemonsPerPage
    
  let totalPokemons = 0
  let currentPokemons = []
  
  if(!pokemons?.pokemon && !pokemons?.results) {
    setTimeout(() => {
      console.log("Retrasado por 1 segundo.");
           
      if (pokemons?.pokemon) {
      
        totalPokemons = pokemons?.pokemon.length
        currentPokemons = pokemons?.pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
      }else{
        
        totalPokemons = pokemons?.results.length    
        currentPokemons = pokemons?.results.slice(indexOfFirstPokemon, indexOfLastPokemon)
      }
    }, "1000");
  }else{
        
    if (pokemons?.pokemon) {
      
      totalPokemons = pokemons?.pokemon.length
      currentPokemons = pokemons?.pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)
  
    }else{
      
      totalPokemons = pokemons?.results.length    
      currentPokemons = pokemons?.results.slice(indexOfFirstPokemon, indexOfLastPokemon)
    }
  } 

  function paginate(pageNumber,e) {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }
  
  return (
    <div className="pokeContainer__container">

    <div className='poke-container_with-pagination'>
      <div className="poke__pagination">
        <Pagination 
            pokemonsPerPage = {pokemonsPerPage} 
            totalPokemons = {totalPokemons} 
            paginate = {paginate}
            />
      </div> 
       
      <article className="poke-container">

       {
        pokemons?.results
        ? (
              currentPokemons.map(pokemon => (
              <PokeCard 
                  key={pokemon.url}
                  url={pokemon.url}
              />
            ))
        )
        :(
          currentPokemons.map(objePoke => (
            
              <PokeCard 
                key={objePoke.pokemon.url}
                url={objePoke.pokemon.url}
              />
          ))
        )
       } 
      </article>
     
    </div>
    </div>
  )
}

export default PokeContainer