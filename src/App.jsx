import { Route, Routes} from "react-router"
import BookSchedule from "./components/BookSchedule";
import Home from "./components/home";
import Contactus from "./components/contactus";
import AddProperty from "./components/add-property";
import Authcheck from "./components/authcheck";
import MyProperty from "./components/myProperty";
import { ProtectRoute } from "./protectroute";
import Find from "./components/find";
import Footer from "./components/footer";
import Navigation from "./components/navbar";
import './index.css';
import Property from "./components/property";

function App() {
  const bookhead=(
    <>
      Choose A Property <br /> To Book A <br /> Visit
    </>
  )
  return (
    <div className="app-wrapper">
      <Navigation />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookSchedule" element={<Property heading={bookhead} />} />
          <Route path="/properties/MyProperty" element={<MyProperty />} />
          <Route path="/BookVisit" element={<BookSchedule />} />
          <Route path="/Contact" element={<Contactus />} />
          <Route path="/Add-Property" element={<ProtectRoute><AddProperty /></ProtectRoute>} />
          <Route path="/property/update/:id" element={<AddProperty />} />
          <Route path="/User/SignUp" element={<Authcheck />} />
          <Route path="/FindProperty" element={<Find />} />
        </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App