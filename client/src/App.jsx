import { Navbar, Welcome, Footer, Services, Transactions, Home, NftExchange, NftImage} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
          <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Welcome' element={<Welcome />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Footer' element={<Footer />} />
            <Route path='/Transactions' element={<Transactions />} />
            <Route path='/NftExchange' element={<NftExchange />} />
            <Route path='/NftImage' element={<NftImage />} />
        </Routes>
        <Footer />
        </div>
    </div>
  </Router>
);

export default App;
