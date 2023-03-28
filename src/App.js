import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Lender from './pages/Lender';
import Minter from './pages/Minter';

import Header from './components/Header';
import { Web3Provider } from '@ethersproject/providers'


export const App = () => {
    return (
       
           
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/lender" element={<Lender />} />
                        <Route path="/minter" element={<Minter />} />
                        
                    </Routes>
                </Router>
            
        
    )
}