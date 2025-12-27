import Background from "./components/Background";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Background />
      <div className="relative z-10 flex justify-center">
        <Home />
      </div>
    </>
  );
}
