import axios from "axios"
import { useState } from "react"

const useFetch = url => {
    const [state, setState] = useState()
    const [hasError, setHasError] = useState()

    const getPokes = () => {
        axios.get(url)
        .then(res => {
            setState(res.data)
            setHasError(false)
        })
        .catch(err => setHasError(true))
        
    }

    return [state, getPokes]

}

export default useFetch