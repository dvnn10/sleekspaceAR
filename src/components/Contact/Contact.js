import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="err-container">
      <h1>Let's Connect and Revolutionize E-commerce</h1>
      <h2>
        Reach out to Project Admin at{" "}
        <Link
          to="https://www.linkedin.com/in/devin-kansal-585092233/"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        and{" "}
        <Link to="mailto:devinkansal@gmail.com" target="_blank">
          devinkansal
        </Link>
      </h2>
    </div>
  );
};

export default Contact;
