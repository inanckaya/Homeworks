import React from "react";
import { Route, Routes } from "react-router-dom";
import {Navigation, Add, Home} from "./Pages";


function App () {

  return (<>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add />} />
          </Routes>
      </>
)
}
export default App