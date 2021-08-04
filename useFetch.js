import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {


    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: null})


    useEffect(() => {
        
        return() => {
            isMounted.current =false
        }

    }, [])

    useEffect(() => {

        setState({data:null, loading: true, error: null})
         
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                //esto es para que cuando hagamos unpedido
                // de un fetch, no tire error por si cancelamos
                //y hacemos otra cosa
                if(isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    
                }
            })
    }, [url])

    return state;
}
