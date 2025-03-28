import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav"; 
import MainLayout from "./layout/MainLayout";
import AboutLayout from "./layout/AboutLayout";
import ContactLayout from "./layout/ContactLayout";
import FeatureLayout from "./layout/FeatureLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/features" element={<FeatureLayout />} /> {/* <Route path="/features" element={<Navigate to="/" />} />*/}
                <Route path="/about" element={<AboutLayout />} />
                <Route path="/contact" element={<ContactLayout />} />
            </Routes>
        </Router>
    );
}

export default App;
