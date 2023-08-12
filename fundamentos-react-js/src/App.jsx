import { Post } from "./Post";

function App() {
  return (
    <div>
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
