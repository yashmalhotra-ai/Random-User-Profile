import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Components/BodyComponent";
import Header from "./Components/HeaderComponent";
import AllPublicUser from "./Components/AllPublicUserComponent";

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