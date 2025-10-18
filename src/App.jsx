import { Route, Routes } from "react-router"
import BookSchedule from "./components/BookSchedule";
import Home from "./components/home";
import Contact from "./components/contact";
import AddProperty from "./components/add-property";
import Authcheck from "./components/authcheck";
import MyProperty from "./components/myProperty";
import Properties from "./components/properties";

function App() {
  const bookhead=(
    <>
      Choose A Property <br /> To Book A <br /> Visit
    </>
  )
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookSchedule" element={<Properties heading={bookhead} />} />
        <Route path="/properties/MyProperty" element={<MyProperty />} />
        <Route path="/BookVisit" element={<BookSchedule />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Add-Property" element={<AddProperty />} />
        <Route path="/property/update/:id" element={<AddProperty />} />
        <Route path="/User/SignUp" element={<Authcheck />} />

      </Routes>
    </>
  )
}

export default App