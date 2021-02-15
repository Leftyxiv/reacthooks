import Accordion from "./components/Accordion";
import List from "./components/List";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route"
import Navigation from './components/Navigation';
import { useState } from "react";

const items = [
  {
    title: "What is react?",
    content: "React is a javascript franework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among developers",
  },
  {
    title: "Are you even any good at this?",
    content: "No, not really!!",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];


const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Navigation />
      <Route path='/'><Accordion items={items} /></Route>
      <Route path='/list'><List /></Route>
      <Route path='/dropdown'><Dropdown 
      label="Select a color"
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      /></Route>
      <Route path='/translate'><Translate /></Route>
    </div>
  );
};

export default App;
