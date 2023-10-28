import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Mendatang from './components/Mendatang';
import Tayang from './components/Tayang';
import Terpopuler from './components/Terpopuler';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pencarian from './components/Pencarian';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tayang/detail/:id" element={<Detail />} />
          <Route path="/terpopuler/detail/:id" element={<Detail />} />
          <Route path="/mendatang/detail/:id" element={<Detail />} />
          <Route path="/mendatang" element={<Mendatang />} />
          <Route path="/tayang" element={<Tayang />} />
          <Route path="/terpopuler" element={<Terpopuler />} />
          <Route path="/pencarian" element={<Pencarian />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
