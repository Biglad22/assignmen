
import classes from  './App.module.css';
import { motion } from 'framer-motion';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/home';

function App() {
  return (
    <section className={`${classes.pageWrapper}`}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
