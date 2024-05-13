import { Routes, Route } from "react-router-dom";
import { Navbar1 } from "./Navbar/Navbar1";
import { Navbar2 } from "./Navbar/Navbar2";
import { Box } from "@chakra-ui/react";
import { Mainpage } from "./Mainpage/Mainpage";
import { Footer } from "./Footer";
import { WomenDress } from "./Women/WomenDress";
import { WomenDressDetail } from "./Women/WomenDressDetail";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { PrivateRoute } from "./PrivateRoute";
import { CheckOut } from "./CheckOut";
import { MenDress } from "./Men/MenDress";
import { MenDressDetail } from "./Men/MenDressDetail";

export function App() {
  return (
    <>
    <Box >
          <Navbar1 />
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/women" element={<PrivateRoute><WomenDress /></PrivateRoute>} />
            <Route path='/women/:userId' element={<PrivateRoute><WomenDressDetail/></PrivateRoute>} />
            <Route path="/men" element={<PrivateRoute><MenDress /></PrivateRoute>} />
            <Route path='/men/:userId' element={<PrivateRoute><MenDressDetail/></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><CheckOut /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Box>

    </>
  );
}




export default App
