import React from 'react'

const Footer = () => {
 const name = new Date();
 const yr = name.getFullYear()
 console.log(name);
    return (
        <footer className='footer'>
            Copyright &copy; {yr}

        </footer>
    )
}

export default Footer
