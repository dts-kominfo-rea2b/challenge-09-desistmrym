// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <div style={{padding: '0 2rem', width: '10%', color: '#faa65e'}}>
            <h1>Call a Friend</h1>
            <p>your friendly contact app</p>
            <hr></hr>
        </div>
    )
}

export default Header;