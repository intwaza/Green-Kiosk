import React ,{useState, useEffect} from 'react'
import image from './images/image.jpg';




export default function Main(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setData(result);
        })
         .catch(error =>{
            setLoading(true);
            setError(error);
         })
    }, [])
   
    if(error){
        return <div> Error: {error}</div>;
    }
    else if(!loading){
        return <div>Loading ...</div>;
    }
    else{
      
        return(
            <div>
                  <img className="product" src={image} alt="products"/>    
            <ul className="products">
            {data.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
            </div>
 
     )
    }
    
}
