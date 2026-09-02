import "./App.css";
import UpdateInfo from "./components/updateinfo/updateInfo.jsx";
import Loader from "./pages/loader/Loader.jsx";

function App() {
  return (
    <div className="app">
      <Loader />
      <UpdateInfo />
    </div>
  );
}

export default App;
