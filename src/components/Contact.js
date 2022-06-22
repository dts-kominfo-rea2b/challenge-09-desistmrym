// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <div style={{padding: '4rem 35rem 0rem 4rem'}}>
                <div style={{backgroundColor: '#faa65e', borderRadius: '20px', padding: '1rem 2rem', marginBottom: '10px'}} key={data.id}>
                    <div style={{display: 'flex', width: '100%'}}>
                        <img src={data.photo} style={{ height: '8rem', borderRadius: '50%'}} alt=""></img>
                        <div style={{textAlign: 'center', width: '100%'}}>
                            <h3>{data.name}</h3>
                            <p style={{fontSize: '12px'}}>{data.phone}</p>
                            <p style={{fontSize: '12px'}}>{data.email}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact;