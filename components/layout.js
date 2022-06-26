import { useEffect, useState } from "react";
import Navbar from "./navbar/navBar";

export default function Layout({ children }) {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showUpButton && (
        <button onClick={() => window.scrollTo(0, 0)} className="upButton">
          <span className="sr-only">go up</span>
          <svg style={{ width: "30px", height: "30px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.03 9.97H11.03V18.89L13.04 18.92V9.97H17.03L12.03 4.97Z"
            />
          </svg>
        </button>
      )}
    </>
  );
}
