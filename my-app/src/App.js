import "./sass/style.scss";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Test from "./components/Test";
import Subheading from "./components/Subheading";
import Content from "./components/Content";

function App() {
  return (
    <div className="container">
      <Heading />
      <Subheading />
      <Paragraph />
      <Content content="This is where the content will go." />
      <List />
      <Test hello="ffff" />
    </div>
  );
}

export default App;
