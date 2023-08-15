import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Jimmy Neutron Africano"
            content="Lorem ipsum dolor sit amet consectetur adipisincg elit."
          />

          <Post
            author="Jimmy Neutron Sueco"
            content="radh\aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
