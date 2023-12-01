import React, { useState, useEffect } from 'react';
import '../css/button.css'

const Button = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 800) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Limpar o listener do evento quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <a className={`back-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        />
        
    )
}

export default Button