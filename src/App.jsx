import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LengthDistanceConversions from './pages/LengthDistanceConversions'
import AreaConversion from './pages/AreaConversions'
import CurrencyConversions from './pages/CurrencyConversions'
import DensityConversions from './pages/DensityConversions';
import DigitalStorageConversions from './pages/DigitalStorageConversions';
import EnergyConversions from './pages/EnergyConversions';
import ForceConversions from './pages/ForceConversions';
import FuelEfficiencyConversions from './pages/FuelEfficiencyConversions';
import PowerConversions from './pages/PowerConversions';
import Speed_conversions from './pages/SpeedConversions';
import Temperature_conversions from './pages/TemperatureConversions';
import VolumeCapacityConversions from './pages/VolumeCapacityConversions';
import WeightMassConversions from './pages/WeightMassConversions';
import PressureConversions from './pages/PressureConversions';
import TimeConversion from './pages/TimeConversion';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Length_distance_conversions" element={<LengthDistanceConversions />} />
          <Route path="/Area_conversion" element={<AreaConversion />} />
          <Route path="/Currency_conversions" element={<CurrencyConversions />} />
          <Route path="/Density_conversions" element={<DensityConversions />} />
          <Route path="/Digital_storage_conversions" element={<DigitalStorageConversions />} />
          <Route path="/Energy_conversions" element={<EnergyConversions />} />
          <Route path="/Force_conversions" element={<ForceConversions />} />
          <Route path="/Fuel_efficiency_conversions" element={<FuelEfficiencyConversions />} />
          <Route path="/Power_conversions" element={<PowerConversions />} />
          <Route path="/Speed_conversions" element={<Speed_conversions />} />
          <Route path="/Temperature_conversions" element={<Temperature_conversions />} />
          <Route path="/Volume_capacity_conversions" element={<VolumeCapacityConversions />} />
          <Route path="/Weight_mass_conversions" element={<WeightMassConversions />} />
          <Route path="/Pressure_conversions" element={<PressureConversions />} />
          <Route path="/Time_conversions" element={<TimeConversion />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
