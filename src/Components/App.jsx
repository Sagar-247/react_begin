import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
const react = require("react");

function App() {
  return (
    <div className="note">
      <Heading />
      <Note />
      <Footer />
    </div>
  );
}
