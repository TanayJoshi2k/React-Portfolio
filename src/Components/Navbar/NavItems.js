import React from "react";
import { motion } from "framer-motion";
function NavItem(props) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.li variants={item}>
      <a href={props.href} style={{ color: props.color }}>
        {props.title}
      </a>
    </motion.li>
  );
}

function NavItems() {
  return (
    <>
      <NavItem href="/" color="#FF008C" title="Tanay" />
      <NavItem href="#about" color="#D309E1" title="About" />
      <NavItem href="#experience" color="#9C1AFF" title="Experience" />
      <NavItem href="#education" color="#7700FF" title="Education" />
      <NavItem href="#skills" color="#4400FF" title="Skills" />
      <NavItem href="#projects" color="#4400FF" title="Projects" />
      <NavItem href="#contact" color="#4400FF" title="Contact" />
    </>
  );
}

export default NavItems;
