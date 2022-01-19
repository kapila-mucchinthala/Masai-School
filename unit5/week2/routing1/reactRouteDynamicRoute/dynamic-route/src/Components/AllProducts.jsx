import { data } from '../db.json';
import { Link } from 'react-router-dom';
export const AllProducts = () => {
    // console.log(data);
    return (
        <table style={{border: '1px solid red',width:'500px',margin:'auto'}}>
            <tr style={{border: '1px solid red'}}>
                <th style={{border: '1px solid red'}}>Name</th>
                <th style={{border: '1px solid red'}}>Price</th>
                <th style={{border: '1px solid red'}}>More Details</th>
            </tr>
            {data.map((e) => 
            <tr style={{border: '1px solid red'}}>
                <td style={{border: '1px solid red'}}>{e.name}</td>
                <td style={{border: '1px solid red'}}>{e.price}</td>
                <td style={{border: '1px solid red'}}><Link to={`/product/${e.id}`}>More Details</Link></td>
                </tr>
           )}
        </table>
    )
}