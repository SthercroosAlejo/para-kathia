import { useEffect, useState } from 'react';
import './ValentinesCard.css';
import {useNavigate} from "react-router-dom";

function ValentinesCard() {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const leftCurtain = document.querySelector<HTMLDivElement>('.left-curtain');
        const rightCurtain = document.querySelector<HTMLDivElement>('.right-curtain');
        if (leftCurtain) {
            leftCurtain.style.width = '0%';
        }
        if (rightCurtain) {
            rightCurtain.style.width = '0%';
        }
    }, []);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            navigate('/sanvalentine');
        }, 800);
    };

    return (
        <div className="valentines-day" onClick={handleClick}>
            <div className="left-curtain"></div>
            <div className="right-curtain"></div>

            <div className={`envelope ${isClicked ? 'fall' : ''}`}>
            </div>

            <div className="heartVD"></div>
            <div className="text"><br />Ábreme<br /></div>
            <div className="front"></div>
        </div>
    );
}

export default ValentinesCard;
