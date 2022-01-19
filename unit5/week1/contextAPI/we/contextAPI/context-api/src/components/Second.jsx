import { Third } from './Third';
import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';


export const Second = () => {
    const storedValue = useContext(AppContext);
    console.log(storedValue);

    return <Third />;
};