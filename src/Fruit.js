import React ,{useState, useEffect} from 'react';
import fruits from './images/image.jpg';



export default function Fruits(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/products/fruits')
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
                 <div className="fruit">  
                  <img className="fruit" src={fruits} alt="fruits"/> 
            <ul className="fruits">
            {data.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
            </div>   
 
     )
    }
    
}
