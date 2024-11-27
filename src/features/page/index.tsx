import Home from "../home";
import About from "../about";
import Project from "../project";
import Contact from "../contact";

function page() {
  return (
    <div className="w-full flex justify-center items-center overflow-y-auto flex-col">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project" className="projectSection">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="text-[#75757a] mb-12">
        <div className="flex items-center justify-center">
          <span className="text-lg">&copy;</span>
          <span className="pl-2">2024 Praveen Chamod</span>
        </div>
        <div className="flex items-center justify-center">
          <span className="pl-1">All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default page;
