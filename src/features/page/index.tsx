import Home from "../home";
import About from "../about";
import Project from "../project";

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
    </div>
  );
}

export default page;
