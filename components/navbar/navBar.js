import navBarStyles from "../../styles/Navbar.module.css";
import toggleHamAnimation from "./hamAnimationController";
import { useRef, useState, useEffect } from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import { reset } from "./makeItActive";
import { useRouter } from "next/router";

export default function NavBar() {
  const [showMobileNavigationList, setShowMobileNavigationList] =
    useState(false);
  const hamContainerRef = useRef();
  const ulListRef = useRef();
  const router = useRouter();

  function toggleHamAndShowHam() {
    toggleHamAnimation(hamContainerRef.current);
    setShowMobileNavigationList(!showMobileNavigationList);
  }

  useEffect(() => {
    reset(ulListRef.current);
    document.addEventListener("scroll", () => {
      const home = document.getElementById("home");
      const history = document.getElementById("history");
      const headwayBook = document.getElementById("headwayBook");
      const aboutUs = document.getElementById("aboutUs");
      if (aboutUs && parseInt(screen.width) > 650) {
        if (window.scrollY + 50 > aboutUs.offsetTop) {
          reset(ulListRef.current);
          ulListRef.current.children[3].children[0].classList.add(
            "navigationActive"
          );
        } else if (window.scrollY + 50 > headwayBook.offsetTop) {
          reset(ulListRef.current);
          ulListRef.current.children[2].children[0].classList.add(
            "navigationActive"
          );
        } else if (window.scrollY + 50 > history.offsetTop) {
          reset(ulListRef.current);
          ulListRef.current.children[1].children[0].classList.add(
            "navigationActive"
          );
        } else if (window.scrollY + 50 > home.offsetTop) {
          reset(ulListRef.current);
          ulListRef.current.children[0].children[0].classList.add(
            "navigationActive"
          );
        }
      }
    });
  }, [router]);
  return (
    <div className={navBarStyles.navbar}>
      <div className={navBarStyles.logoBox}>
        <Image src="/university.png" alt="Logo" width={50} height={50} />
        <p>Alkadhum university</p>
      </div>
      <ul ref={ulListRef} className={navBarStyles.navigationList}>
        <Link href="/">
          <li>
            <p className={navBarStyles.navigationListParagraph}>Home</p>
          </li>
        </Link>
        <Link href={router.pathname !== "/lecture" ? "#history" : "/"}>
          <li>
            <p className={navBarStyles.navigationListParagraph}>History</p>
          </li>
        </Link>
        <Link href={router.pathname !== "/lecture" ? "#headwayBook" : "/"}>
          <li>
            <p className={navBarStyles.navigationListParagraph}>Headway book</p>
          </li>
        </Link>

        <Link href={router.pathname !== "/lecture" ? "#aboutUs" : "/"}>
          <li>
            <p className={navBarStyles.navigationListParagraph}>About us</p>
          </li>
        </Link>
      </ul>
      <div
        ref={hamContainerRef}
        className="ham_Container"
        onClick={toggleHamAndShowHam}
      >
        <div className="circle"></div>
        <div className="ham_4">
          <div className="middleBar"></div>
        </div>
        <div className="hide"></div>
      </div>
      {showMobileNavigationList && (
        <nav className={navBarStyles.mobileNavigationList}>
          <ul className={navBarStyles.mobileNavigationListUl}>
            <Link href="/">
              <li onClick={toggleHamAndShowHam}>
                <p className={navBarStyles.navigationListParagraph}>Home</p>
              </li>
            </Link>
            <Link href={router.pathname !== "/lecture" ? "#history" : "/"}>
              <li onClick={toggleHamAndShowHam}>
                <p className={navBarStyles.navigationListParagraph}>History</p>
              </li>
            </Link>
            <Link href={router.pathname !== "/lecture" ? "#headwayBook" : "/"}>
              <li onClick={toggleHamAndShowHam}>
                <p className={navBarStyles.navigationListParagraph}>
                  Headway book
                </p>
              </li>
            </Link>

            <Link href={router.pathname !== "/lecture" ? "#aboutUs" : "/"}>
              <li onClick={toggleHamAndShowHam}>
                <p className={navBarStyles.navigationListParagraph}>About us</p>
              </li>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
}
