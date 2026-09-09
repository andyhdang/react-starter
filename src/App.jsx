import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import ComponentLibrary from "./pages/component-library/ComponentLibrary";
import Home from "./pages/home/Home";
import StyleGuide from "./pages/style-guide/StyleGuide";
import Accessibility from "./pages/style-guide/sections/Accessibility";
import Elevation from "./pages/style-guide/sections/Elevation";
import Icons from "./pages/style-guide/sections/Icons";
import Media from "./pages/style-guide/sections/Media";
import Monospace from "./pages/style-guide/sections/Monospace";
import Motion from "./pages/style-guide/sections/Motion";
import Tokens from "./pages/style-guide/sections/Tokens";
import Typography from "./pages/style-guide/sections/Typography";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/style-guide' element={<StyleGuide />}>
              <Route index element={<Navigate to="typography" replace />} />
              <Route path='typography' element={<Typography />} />
              <Route path='monospace' element={<Monospace />} />
              <Route path='media' element={<Media />} />
              <Route path='elevation' element={<Elevation />} />
              <Route path='accessibility' element={<Accessibility />} />
              <Route path='tokens' element={<Tokens />} />
              <Route path='icons' element={<Icons />} />
              <Route path='motion' element={<Motion />} />
            </Route>
            <Route path='/component-library' element={<ComponentLibrary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
