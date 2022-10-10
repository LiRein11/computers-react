import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import './scss/style.scss'; 
import './index.css';
import './App.css';
import Call from './pages/Call';
import ComputerRepair from './pages/ComputerRepair';
import InstallationPrograms from './pages/InstallationPrograms';
import InternetSetup from './pages/InternetSetup';
import LaptopRepair from './pages/LaptopRepair';
import VirusRemoval from './pages/VirusRemoval';
import SystemInstallation from './pages/SystemInstallation';
import Politics from './pages/Politics';
import Review from './pages/Review';
import Loading from './pages/Loading';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/call" element={<Call />} />
      <Route path="/computer-repair" element={<ComputerRepair />} />
      <Route path="/installation-programs" element={<InstallationPrograms />} />
      <Route path="/internet-setup" element={<InternetSetup />} />
      <Route path="/laptop-repair" element={<LaptopRepair />} />
      <Route path="/virus-removal" element={<VirusRemoval />} />
      <Route path="/system-installation" element={<SystemInstallation />} />
      <Route path="/politics" element={<Politics />} />
      <Route path="/review" element={<Review />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;
