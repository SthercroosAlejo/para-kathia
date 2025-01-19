import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardLetter from "./components/CardLetter/CardLetter.tsx";
import ValentinesCard from "./components/ValentinesCard/ValentinesCard.tsx";
import SanValentinInvitation from "./components/SanValentinInvitation/SanValentinInvitation.tsx";
import Flores from "./components/Flores/Flores.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CardLetter />} />

                <Route path="/valentines" element={<ValentinesCard />} />

                <Route path="/sanvalentine" element={<SanValentinInvitation />} />

                <Route path="/flores" element={<Flores />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
