import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <TopBar />
      <main className="mx-auto flex xl:max-w-[85%] flex-col gap-6 md:gap-8 px-4 md:px-6 py-6 md:py-8 w-full">
        <Presentation />
        <Skills />
        <Experience />
        <Education />
      </main>
    </div>
  );
};

export default Home;
