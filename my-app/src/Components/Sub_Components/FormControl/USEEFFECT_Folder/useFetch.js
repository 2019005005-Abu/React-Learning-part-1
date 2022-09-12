import React,{useEffect,useState} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(true);
    useEffect(()=>{
      setTimeout(()=>{
        fetch(url)
        .then((response)=>{
            if(!response.ok)throw  Error("Fetching is not success")
            else return response.json()
        }).then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(false);
        }).catch((err)=>{
            setError(error.message);
            isLoading(false)
        })
      },2000)
    },[url])
    
    return {
          data,
          isLoading,
          error
    }
}

export default useFetch
