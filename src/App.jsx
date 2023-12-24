import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <RootLayout>
        <Home />
        <ScrollToTop />
      </RootLayout>
    </>
  );
}

export default App;
