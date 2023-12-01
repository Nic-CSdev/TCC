import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import '../css/footer.css'


const Footer = () => {
    return (
            <footer className="footer">
                <div className="icones">
                    <a href="#">
                        <FaFacebookSquare className="icone" />
                    </a>
                    <a href="#">
                        <FaInstagram className="icone" />
                    </a>
                    <a href="#">
                        <FaDiscord className="icone" />
                    </a>
                </div>
                <p>Copyright ©2023 Todos os direitos reservados</p>
            </footer>
    )
}

export default Footer