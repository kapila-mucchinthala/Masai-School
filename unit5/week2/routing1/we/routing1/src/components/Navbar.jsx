import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'lightGrey',
            margin: '10px',
            height: '50px',
            paddingTop: '20px'
        
        }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/settings'>Settings</Link>
        </div>
    )
}