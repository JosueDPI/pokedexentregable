import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import "./styles/formPoke.css"

const FormPoke = ({setFormUrl, urlBase}) => {

    const inputPoke = useRef()

    const navigate = useNavigate()

    const url = "https://pokeapi.co/api/v2/type/"

    const [ types, getAllTypes ] = useFetch(url)

    useEffect(() => {
        getAllTypes()
    }, [])

    console.log(types)
    

    const handleSubmit = e => {
        e.preventDefault()
        const path=`/pokedex/${inputPoke.current.value.trim().toLowerCase()}` 
        navigate(path)
    }
    
    const handleChange = e => {
        setFormUrl(e.target.value)
    }
  return (
    <div className='formPoke__container'>
        <form className='formPoke__form' onSubmit={handleSubmit}>
            <input ref = {inputPoke} type="text" />
            <button>Search</button>
        </form>
        <select className='formPoke__select' onChange={handleChange}>
            <option value={urlBase}>AllPokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
            
        </select>
    </div>
  )
}

export default FormPoke