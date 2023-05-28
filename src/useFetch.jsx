import { useEffect,useState } from "react";

const useFetch = (url) => {
    
    const [data,setData] = useState(null)
    const [isPending,setisPending] = useState(true)
    const [error,setError] = useState(null);

    useEffect(() => 
      {
        const abortContr = new AbortController();
          /*  correct way =>
        fetch(`http://localhost:8000/blogs`)
          .then(res => {
            return res.json();
          })
          .then(data =>{
            setBlogs(data)
            setisPending(false)
          }) */
    
        //to mimick real world app
        setTimeout(() => 
        {
          fetch(url,{signal: abortContr.signal})
          .then(res => {
          if(!res.ok){
              throw Error('Could Not Fetch Data For That Resource')
          }
          return res.json();
          })
          .then(data =>{
          setData(data)
          setisPending(false)
          setError(null);
          })
          .catch((err) => {
            if(err.name === 'AbortError'){
              console.log('Fetch aborted')
            }else{
              setError(err.message);
              setisPending(false)
            }
          })
        },1000) 

        return ()=> abortContr.abort();
      },[url]
    )

    return {data,isPending,error};
}

export default useFetch;