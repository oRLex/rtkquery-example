import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./features/users";
import Posts from "./features/posts";
import Album from "./features/albums";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Users/>}/>
          <Route path={'album'} element={<Album/>}/>
          <Route path={'posts'} element={<Posts/>}/>
          <Route></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
