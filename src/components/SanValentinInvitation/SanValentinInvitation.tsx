import {useEffect, useState} from 'react';
import './SanValentinInvitation.css';

function SanValentinInvitation() {
    // Controlamos cuál GIF está visible
    const [showGifContainer, setShowGifContainer] = useState(true);   // "gifContainer"
    const [showHappy1, setShowHappy1] = useState(false);              // "happyGifContainer"
    const [showHappy2, setShowHappy2] = useState(false);              // "happyGifContainer2"
    const [showHappy3, setShowHappy3] = useState(false);              // "happyGifContainer3"
    const [showHappy4, setShowHappy4] = useState(false);              // "happyGifContainer4"
    const [showSad1, setShowSad1] = useState(false);                  // "sadGifContainer"
    const [showSad2, setShowSad2] = useState(false);                  // "sadGifContainer1"
    const [showSad3, setShowSad3] = useState(false);                  // "sadGifContainer2"
    const [showBtnNo, setShowBtnNo] = useState(true);                 // botón "No"

    // Control del texto principal y el mensaje
    const [questionVisible, setQuestionVisible] = useState(true);      // <h1 id="question">
    const [message, setMessage] = useState("");                        // innerHTML de messageContainer
    const [messageVisible, setMessageVisible] = useState(false);

    // Botones y estilos
    const [noBtnText, setNoBtnText] = useState("No");                  // texto del botón "No"
    const [noBtnBG, setNoBtnBG] = useState("#f1330a");                 // backgroundColor del botón "No"
    const [siBtnStyle, setSiBtnStyle] = useState({});                  // estilos en línea para el botón "Sí"
    const [sorpresaBtnVisible, setSorpresaBtnVisible] = useState(false);

    // Para simular "body.classList.add('bg-green')" usaremos una clase condicional
    const [isGreenBackground, setIsGreenBackground] = useState(false);

    // Control de la secuencia de clicks en el botón "No"
    const [noButtonState, setNoButtonState] = useState(0);

    // -----------------------------
    // Al hacer click en "Sí" (siBtn)
    // -----------------------------
    const handleSiClick = () => {
        setShowBtnNo(false);
        // Ocultar los gifs "tristes"
        setShowSad1(false);
        setShowSad2(false);
        setShowSad3(false);

        // Ocultar el gif inicial
        setShowGifContainer(false);

        // Mostrar el primer gif feliz
        setShowHappy1(true);

        // Ocultar la pregunta y el botón "No"
        setQuestionVisible(false);
        setIsGreenBackground(true);  // cambia el fondo
        // Ocultamos botón Sí y No
        // (si quieres ocultar el botón Sí también)
        setSiBtnStyle({ display: 'none' });

        // Mostramos el mensaje
        setMessage("¡Oh Siii! jajaja");
        setMessageVisible(true);

        // A los 1s ocultamos happy1, mostramos happy2
        setTimeout(() => {
            setShowHappy1(false);
            setShowHappy2(true);
        }, 1000);

        // A los 2s ocultamos happy2, mostramos happy3
        setTimeout(() => {
            setShowHappy2(false);
            setShowHappy3(true);
        }, 2000);

        // A los 3s ocultamos happy3, mostramos happy4 y el botón sorpresa
        setTimeout(() => {
            setShowHappy3(false);
            setShowHappy4(true);
            setSorpresaBtnVisible(true);
        }, 3000);
    };

    // -----------------------------
    // Al hacer click en "Sorpresa"
    // -----------------------------
    const handleSorpresa = () => {
        // Redireccionar a "flores.html"
        window.location.href = 'flores.html';
    };

    // -----------------------------
    // Al hacer click en "No" (noBtn)
    // -----------------------------
    const handleNoClick = () => {
        // Vamos a basarnos en tu switch(noButtonState)
        // e ir incrementando el estado en cada caso.
        switch (noButtonState) {
            case 0: {
                // case 0
                setShowGifContainer(false);
                setShowSad1(true);

                setNoBtnText("¡Oh no! ¿Estás seguro?");
                setNoBtnBG("#F1330A");
                setSiBtnStyle({ fontSize: "40px", padding: "20px 40px" });

                setNoButtonState(1);
                break;
            }
            case 1: {
                setNoBtnText("¡¿Realmente estas seguro?!");
                setNoBtnBG("#F1330A");
                setShowSad1(false);
                setShowSad3(true); // "sadGifContainer2" (revisa si era la #2 o #1)

                setSiBtnStyle({ fontSize: "50px", padding: "30px 50px" });

                setNoButtonState(2);
                break;
            }
            case 2: {
                setNoBtnText("Estás seguro de verdad, ¿eh?");
                setNoBtnBG("#F1330A");
                setShowSad3(false);
                setShowSad2(true);  // "sadGifContainer1"

                setSiBtnStyle({ fontSize: "60px", padding: "40px 60px" });

                setNoButtonState(3);
                break;
            }
            case 3: {
                setNoBtnText("¿Eres positvo?");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "70px", padding: "50px 70px" });

                setNoButtonState(4);
                break;
            }
            case 4: {
                setNoBtnText("Di que si por favor?");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "80px", padding: "60px 80px" });

                setNoButtonState(5);
                break;
            }
            case 5: {
                setNoBtnText("Solo piensa en ello");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "90px", padding: "70px 90px" });

                setNoButtonState(6);
                break;
            }
            case 6: {
                setNoBtnText("Si dices que no, estaré muy triste");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "100px", padding: "80px 100px" });

                setNoButtonState(7);
                break;
            }
            case 7: {
                setNoBtnText("Estaré muy triste");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "120px", padding: "90px 120px" });

                setNoButtonState(8);
                break;
            }
            case 8: {
                setNoBtnText("Estaré muy muy muy triste");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "140px", padding: "100px 140px" });

                setNoButtonState(9);
                break;
            }
            case 9: {
                setNoBtnText("Estaré muy muy muy muy triste.");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "160px", padding: "110px 160px" });

                setNoButtonState(10);
                break;
            }
            case 10: {
                setNoBtnText("Vale, ya dejaré de preguntar...");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "180px", padding: "120px 180px" });

                setNoButtonState(11);
                break;
            }
            case 11: {
                setNoBtnText("Es broma, POR FAVOR DI SÍ");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "200px", padding: "130px 200px" });

                setNoButtonState(12);
                break;
            }
            case 12: {
                setNoBtnText("Estaré muy muy muy muy muy triste.");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "220px", padding: "140px 220px" });

                setNoButtonState(13);
                break;
            }
            case 13: {
                setNoBtnText("Estás rompiendo mi corazón :(");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "240px", padding: "150px 240px" });

                setNoButtonState(14);
                break;
            }
            case 14: {
                setNoBtnText("NO... ya di que si");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "260px", padding: "160px 260px" });

                setNoButtonState(15);
                break;
            }
            case 15: {
                setNoBtnText("Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii");
                setNoBtnBG("#F1330A");

                setSiBtnStyle({ fontSize: "280px", padding: "170px 280px" });

                setNoButtonState(16);
                break;
            }
            case 16: {
                setNoBtnText("por favooooooor");
                setNoBtnBG("#F1330A");

                // Resetea a estado 0 y vuelve al gif inicial
                setShowSad1(false);
                setShowSad2(false);
                setShowSad3(false);
                setShowGifContainer(true);
                setShowHappy1(false);

                setNoButtonState(0);
                break;
            }
            default:
                break;
        }
    };

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'auto';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div className={`san-container ${isGreenBackground ? 'bg-green' : ''}`}>
            {/* Gif inicial */}
            {showGifContainer && (
                <div id="gifContainer">
                    <img
                        id="gifContainerImg"
                        src="/mocha.gif"
                        alt="Ositos Iniciales"
                        style={{ width: '50%', height: '50%' }}
                    />
                </div>
            )}

            {/* Gifs Felices */}
            {showHappy1 && (
                <div id="happyGifContainer">
                    <img src="/mocha5final.gif" alt="Ositos Felices"
                         style={{ width: '50%', height: '50%' }}/>
                </div>
            )}
            {showHappy2 && (
                <div id="happyGifContainer2">
                    <img src="/mocha6final.gif" alt="Ositos Felices"
                         style={{ width: '50%', height: '50%' }}/>
                </div>
            )}
            {showHappy3 && (
                <div id="happyGifContainer3">
                    <img src="/mocha7final.gif" alt="Ositos Felices"
                         style={{ width: '50%', height: '50%' }}/>
                </div>
            )}
            {showHappy4 && (
                <div id="happyGifContainer4">
                    <img src="/mocha9final.gif" alt="Ositos Felices"
                         style={{ width: '50%', height: '50%' }}/>
                </div>
            )}

            {/* Gifs Tristes */}
            {showSad1 && (
                <div id="sadGifContainer">
                    <img src="/mocha2.gif" alt="Osito Triste"
                         style={{ width: '65%', height: '65%' }}/>
                </div>
            )}
            {showSad2 && (
                <div id="sadGifContainer1">
                    <img src="/mocha3.gif" alt="Osito Triste"
                         style={{ width: '65%', height: '65%' }}/>
                </div>
            )}
            {showSad3 && (
                <div id="sadGifContainer2">
                    <img src="/mocha4.gif" alt="Osito Triste"
                         style={{ width: '65%', height: '65%' }} />
                </div>
            )}

            {/* Pregunta */}
            {questionVisible && (
                <h1 id="question">¿Quieres ser mi San Valentín?</h1>
            )}

            {/* Mensaje */}
            {messageVisible && (
                <div id="messageContainer">
                    {message}
                </div>
            )}

            {/* Botones */}
            <button id="siBtn" onClick={handleSiClick} style={siBtnStyle}>
                Sí
            </button>


            {showBtnNo && (
                <button
                        id="noBtn"
                        onClick={handleNoClick}
                    style={{backgroundColor: noBtnBG}}
                >
                    {noBtnText}
                </button>
            )}

            {sorpresaBtnVisible && (
                <button id="sorpresaBtn" onClick={handleSorpresa}>
                    ¡Sorpresa!
                </button>
            )}
        </div>
    );
}

export default SanValentinInvitation;
