import { Sidebar } from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  const animations = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span {...animations}>Jashandeep Singh</motion.span>
        <div className="social">
          <a href="">
            <motion.img src="linkedin.png" alt="linkedin" {...animations} />
          </a>
          <a href="">
            <motion.img
              src="github-logo.png"
              alt="github-logo"
              {...animations}
            />
          </a>
          <a href="">
            <motion.img src="code.png" alt="leetcode" {...animations} />
          </a>
        </div>
      </div>
    </div>
  );
};
