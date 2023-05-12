import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./styles/formNameUser.css"

const FormNameUser = () => {

    const {trainerName} = useSelector(state => state)

    const inputName = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate("/pokedex")
    }
    
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input className='form-input' ref ={inputName} type="text" />
        <button className='form-btn' type="submit">Go!</button>
    </form>
  )
}

export default FormNameUser