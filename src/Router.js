import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Components/Body.Component";
import Header from "./Components/Header.component";
import AllPublicUser from "./Components/AllPublicUser.Component";

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/allpublicuser" element={<AllPublicUser />} />
            </Routes>
        </Router>
    )
}
export default Routing;