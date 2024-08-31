import Landing from "./pages/Landing";
import { motion, useScroll } from "framer-motion";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="container">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Landing />
    </motion.div>
  );
}

export default App;
