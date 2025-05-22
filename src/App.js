
import SuziLinge from "./components/header";
import SearchSection from "./components/search";
import FooterSection from "./components/footer";
import ContactComponents from "./components/contact";

import { Route,Routes,BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
          <Route path="/" element={
            <>
             <SuziLinge></SuziLinge>
             <SearchSection></SearchSection>
             <FooterSection></FooterSection>
           </>
        }/>
        <Route path="/contact" element={
           <>
            <ContactComponents/>
            <FooterSection></FooterSection>
          </>
          }/>
       </Routes>
     </BrowserRouter>
    </>
  )
   
  
}


export default App;

