
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import pokeCard from "./styles/pokeCard.css"
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ url }) => {

    const [ pokemon, getPokemonByid ] = useFetch(url)

    useEffect(() => {
        getPokemonByid()
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.name}`)
    }

    
  return (
    <article onClick={handleClick} className= {`pokemon border-${pokemon?.types[0].type.name}`}>
        <header className={ `pokemon__header bg-${pokemon?.types[0].type.name}`}>
            <img className='pokemon__sprite' src={pokemon?.sprites.other["official-artwork"].front_default} alt=""/>
        </header>
        <section className='pokemon__body'>
            <h2 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
            <ul className='pokemon__types'>
                {
                    pokemon?.types?.map((type) => {
                        return <li className='pokemon__type-specific' key={type.type.name}>{type.type.name}</li>
                    })
                }
            </ul>
            <ul className='pokemon__stats'>
                {
                    pokemon?.stats.map(stat => (
                        <li className='pokemon__stats-specific' key={stat.stat.url}>
                            <span className='pokemon__stats-label'>{stat.stat.name}</span>
                            <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
        
    </article>
  )
}

export default PokeCard