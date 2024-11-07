import Accordion from "./components/Accordion";
import faqs from "./data/data";


function App() {
  return (
    <>
    <Accordion data={faqs} />
    </>
  );
}


export default App;
