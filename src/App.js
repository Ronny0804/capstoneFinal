import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { db,auth,firestore } from "./firebase";
import { doc,getDoc } from "firebase/firestore";
import Home from "./pages/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Hotelone from "./pages/Components/Hotelone";
import Login from "./pages/Login/Login";
import SinglePage from './pages/Templates/SinglePage'
import Templates from "./components/Templates/Templates";
import Loginuser from "./pages/Loginuser/Loginuser";
import Signup from "./pages/Signupuser/Signup";
import Panshop1 from "./components/Templates/Panshopone/Panshopone";

import Hotel2 from "./pages/ALLTemplates/Hotel/Hotel2"
import Hotel3 from "./pages/ALLTemplates/Hotel/Hotel3"
import Hotel4 from "./pages/ALLTemplates/Hotel/Hotel4"
import Hotel5 from "./pages/ALLTemplates/Hotel/Hotel5"
import H1 from "./compnentJSXTemplates/H2";
import Panshopone from "./pages/ALLTemplates/Panshop/Panshop1"
import Panshop2 from "./pages/ALLTemplates/Panshop/Panshop2"
import Panshop3 from "./pages/ALLTemplates/Panshop/Panshop3"
import Panshop4 from "./pages/ALLTemplates/Panshop/Panshop4"
import Panshop5 from "./pages/ALLTemplates/Panshop/Panshop5"
import Ngo1 from "./pages/ALLTemplates/Ngo/Ngo1";
import Ngo2 from "./pages/ALLTemplates/Ngo/Ngo2";
import H2 from "./compnentJSXTemplates/H2";
import { userStateChange } from "./action";
import { useDispatch } from "react-redux";
const App=()=> {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const dispatch= useDispatch()

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,user=>{
       console.log(user)
       if(user){
       const docRef = doc(firestore,db.users,user.email)
       const docSnap = getDoc(docRef)
       .then(doc=>{

         dispatch(userStateChange(db.formatedDoc(doc)))
       })
           
       }
    })
   
    return unsubscribe;
       },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/loginuser" element={<Loginuser />} />
          <Route exact path="/signupuser" element={<Signup />} />
          <Route exact path="/panshop1" element={<Panshop1 />} />
          <Route exact path="/templates" element={<Templates />} />
          <Route  path="/hi" element={<Hotelone />} />
          <Route path="/pages/:id" element={<SinglePage />} />
          <Route path="/hotel2" element={<Hotel2 />} />
          <Route path="/hotel3" element={<Hotel3 />} />
          <Route path="/hotel4" element={<Hotel4 />} />
          <Route path="/hotel5" element={<Hotel5 />} />
          <Route path="/panshopone" element={<Panshopone />} />
          <Route path="/panshop2" element={<Panshop2 />} />
          <Route path="/panshop3" element={<Panshop3 />} />
          <Route path="/panshop4" element={<Panshop4 />} />
          <Route path="/panshop5" element={<Panshop5 />} />
          <Route path="/ngo1" element={<Ngo1 />} />
          <Route path="/ngo2" element={<Ngo2 />} />
           <Route path="/H1" element={<H1/>} />
          <Route path="/H2" element={<H2/>} /> 
          <Route path="/singlePage/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
