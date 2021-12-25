import './App.css';
import {Routes, Route} from "react-router-dom";

import AppHeader from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import DashboardPage from "../../pages/DashboardPage";
import CoursesPage from "../../pages/CoursesPage";
import PreferencesPage  from "../../pages/PreferencesPage";
import NotificationsPage  from "../../pages/NotificationsPage";

function App() {
  return (

    <div className="app flex flex-row">
        <Sidebar />
        <main className={"flex flex-col"}>
            <AppHeader title="Depth"/>

            <div className={"page flex-grow-9"}>
                <Routes>
                    <Route path="/" element={<DashboardPage/>}/>
                    <Route path="/learn"  element={<CoursesPage/>}/>
                    <Route path="/notifications"  element={<NotificationsPage/>}/>
                    <Route path="/preferences"  element={<PreferencesPage/>}/>
                </Routes>
            </div>

        </main>

    </div>
  );
}

export default App;
