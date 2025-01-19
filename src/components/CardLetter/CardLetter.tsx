import { useState } from 'react';
import './CardLetter.css';
import {Link} from "react-router-dom";

const CardLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [coverZIndex, setCoverZIndex] = useState(2);
    const [showHeart, setShowHeart] = useState(false);

    const handleToggle = () => {
        if (!isOpen) {
            // ABRIR
            setIsOpen(true);
            setTimeout(() => {
                setCoverZIndex(-1);
                setShowHeart(true);
            }, 500);
        } else {
            // CERRAR
            setIsOpen(false);
            setCoverZIndex(2);
            setTimeout(() => {
                setShowHeart(false);
            }, 500);
        }
    };

    return (
        <main>
            <div className="container-letter" id="cardContainer" onClick={handleToggle}>
                {/* TAPA */}
                <div className={`cover ${isOpen ? 'open-cover' : ''}`} style={{zIndex: coverZIndex}}></div>
                <span className="heart" style={{display: showHeart ? 'block' : 'none'}}></span>
                <p className={`paper ${isOpen ? 'open-paper' : 'close-paper'}`}>
                    En este día especial de amor y amistad, celebremos los lazos que nos unen.
                    Que la alegría y el cariño nos acompañen siempre. ¡Feliz día!
                    <div style={{textAlign: 'center'}}>
                        <Link to="/valentines">
                            <button>Ir a la otra carta</button>
                        </Link>
                    </div>
                </p>
                <div className="letter"></div>
            </div>
        </main>
    );
};

export default CardLetter;
