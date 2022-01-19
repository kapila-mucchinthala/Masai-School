import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            marginLeft:'40%',
            justifyContent:'space-around'
        }}>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/products'>All Products</Link></div>
        </div>
    )
}