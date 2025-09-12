import { Route, Routes } from "react-router"
import BookSchedule from "./components/BookSchedule";
import Home from "./components/home";
import Properties from "./components/properties";
import Contact from "./components/contact";
import AddProperty from "./components/add-property";

function App() {
  const bookhead=(
    <>
      Choose A Property <br /> To Book A <br /> Visit
    </>
  )
  const propertyhead=(
    <>
      we provide the <br /> best property <br /> you like
    </>
  )
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookSchedule" element={<Properties heading={bookhead} />} />
        <Route path="/Properties" element={<Properties heading={propertyhead} />} />
        <Route path="/BookVisit" element={<BookSchedule />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Add-Property" element={<AddProperty />} />
      </Routes>
    </>
  )
}

export default App