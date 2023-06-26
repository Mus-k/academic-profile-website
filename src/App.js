import { useState } from "react";
import { Layout } from "./layout/Layout";
import { Pages } from "./pagesRoutes/PagesRoute";

function App() {
  const [open, setOpen] = useState(false);
  function menuOpen() {
    setOpen(!open);
  }
  return (
    <div className="App">
      <Layout open={open} menuOpen={menuOpen} />
      <Pages/>
    </div>
  );
}

export default App;
