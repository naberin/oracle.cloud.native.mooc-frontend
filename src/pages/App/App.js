import './App.css';
import {Routes} from "react-router-dom";

import AppHeader from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
function App() {
  return (

    <div className="app flex flex-row">
        <Sidebar />
        <AppHeader title="Depth"/>

        <Routes>

        </Routes>
    </div>
  );
}

export default App;
