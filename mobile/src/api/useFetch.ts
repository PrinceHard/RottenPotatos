import { useState, useEffect } from 'react';
import { apiClient } from '.';

export const useFetch = (path: string) => {
    
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiClient.get(path)
            .then(({data}) => {
                setResponse(data)
                setLoading(false)
            })
            .catch(()=>{
                setLoading(false)
            })
    }, [])
    return { response, loading }
}
