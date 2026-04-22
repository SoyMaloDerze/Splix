
import './index.css'
import AppRoutes from '@/app/routes';
import { AnimatePresence } from "framer-motion";
// import { Routes, useLocation } from "react-router-dom";

function App() {
  

  return (
    <AnimatePresence mode="wait">
      
      <AppRoutes />
      
    </AnimatePresence>
  )
}

export default App;