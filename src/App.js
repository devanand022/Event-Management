import Toggle from './components/Toggle/Toggle';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Reg_Committee/MainPage';
import Add from './components/Reg_Committee/Pages/Add/Add';
import College from './components/Reg_Committee/Pages/College/College';
import Participates from './components/Reg_Committee/Pages/Participates/Participates';
import Event from './components/Reg_Committee/Pages/Eve/Event';
import Adminpage from './components/Admin/Adminpage';
import Settings from './components/Admin/pages/Settings/Settings';
import AdminRegPage from './components/Admin/pages/Reg_Committee/AdminRegPage';
import AdminAdd from './components/Admin/pages/Reg_Committee/Pages/Add/AdminAdd';
import AdminCollege from './components/Admin/pages/Reg_Committee/Pages/College/AdminCollege';
import AdminEvent from './components/Admin/pages/Reg_Committee/Pages/Eve/AdminEvent';
import AdminParticipates from './components/Admin/pages/Reg_Committee/Pages/Participates/AdminParticipates';
import StaffPage from './components/StaffEvent/StaffPage';
import Prelims from './components/StaffEvent/Pages/Prelims/Prelims';
import Finals from './components/StaffEvent/Pages/Finals/Finals';
import AdminStaff from './components/Admin/pages/StaffEvent/AdminStaff';
import AdminPrelims from './components/Admin/pages/StaffEvent/Pages/Prelims/AdminPrelims';
import AdminFinals from './components/Admin/pages/StaffEvent/Pages/Finals/AdminFinals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="App">
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/reg/dashboard" element={<MainPage />} />
        <Route path='/reg/add' element={<Add />} />
        <Route path='/reg/college' element={<College />} />
        <Route path='/reg/participate' element={<Participates />} />
        <Route path='/reg/event' element={<Event />} />
        <Route path='/admin/dashboard' element={<Adminpage />} />
        <Route path='/admin/settings' element={<Settings />} />
        <Route path="/admin/reg/dashboard" element={<AdminRegPage />} />
        <Route path='/admin/reg/add' element={<AdminAdd />} />
        <Route path='/admin/reg/college' element={<AdminCollege/>} />
        <Route path='/admin/reg/event' element={<AdminEvent />} />
        <Route path='/admin/reg/participate' element={<AdminParticipates />} />
        <Route path='/event/dashboard' element={<StaffPage />} />
        <Route path='/event/prelims' element={<Prelims />} />
        <Route path='/event/final' element={<Finals />} />
        <Route path='/admin/event/dashboard' element={<AdminStaff />} />
        <Route path='/admin/event/prelims' element={<AdminPrelims />} />
        <Route path='/admin/event/final' element={<AdminFinals />} />
      </Routes>
    </div>
  );
}

export default App;
