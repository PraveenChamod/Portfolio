import { useEffect, useState } from "react";

function NavBar() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-shadow duration-300 bg-[#101014] ${
        hasShadow ? "shadow-lg" : ""
      }`}
    >
      <div className="py-6 relative z-50">
        <nav className="container mx-auto flex justify-center items-center">
          <div className="links">
            <ul className="flex flex-row gap-x-4 sm:gap-x-14 sm:text-lg md:gap-x-14 md:text-xl lg:gap-x-20 lg:text-xl text-md list-none">
              <li onClick={() => handleScrollToSection("home")}>
                <button>Home</button>
              </li>
              <li onClick={() => handleScrollToSection("about")}>
                <button>About</button>
              </li>
              <li onClick={() => handleScrollToSection("project")}>
                <button>Projects</button>
              </li>
              <li onClick={() => handleScrollToSection("contact")}>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
