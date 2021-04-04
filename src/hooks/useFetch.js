import { useEffect, useState, useRef } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null})

    useEffect(() => {
        return () => {
            console.log('isMounted',isMounted);
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null});

        fetch(url)
        .then(resp => resp.json() )
        .then( data => {

            if(isMounted){
                setState({
                    loading: false,
                    error: null,
                    data
                })    
            } else {
                console.log('setSate no se llamó');
            }
            // setTimeOut aplicado como ejemplificación de useRef
            // setTimeout(() => {
            // }, 2500);
        })

    }, [url])

    return state;
}
