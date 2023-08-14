import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <Post
        author="Jimmy Neutron Africano"
        content="Lorem ipsum dolor sit amet consectetur adipisincg elit."
      />

      <Post
        author="Jimmy Neutron Sueco"
        content="radh\aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      />
    </div>
  );
}

export default App;
