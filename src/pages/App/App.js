import './App.css';
import {Routes, Route} from "react-router-dom";

import AppHeader from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import DashboardPage from "../../pages/DashboardPage";

function App() {
  return (

    <div className="app flex flex-row">
        <Sidebar />
        <main className={"flex flex-col"}>
            <AppHeader title="Depth"/>

            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
            </Routes>
        </main>

    </div>
  );
}

export default App;
