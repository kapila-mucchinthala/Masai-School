import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react';
import { data } from '../db.json';

export const ProductDetails = () => {
    const { params } = useParams();
    const [details, setDetails] = useState({});
    
    useEffect(() => {
        data.map((e) => {
            if (e.id === Number(params)) {
                setDetails(e);
            }
        
        })
    }, []);
     
    // console.log(details);
    return (
        <div>
            <h2>More Details Of Product</h2> 
            <h2>Product: {details.name}</h2>
            <h3>Price: {details.price}</h3>

        </div>
    )

}