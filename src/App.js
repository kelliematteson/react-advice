import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


export default function App() {
    const [ advice, setAdvice ] = useState(
        'hello'
    );



    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice)
            })
            .catch((error) => {
                console.log(error)
            })
    }    
    

    
        return (
            <button onClick={fetchAdvice}>{advice}</button>
        )
}

