import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DensityConversions = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [conversionType, setConversionType] = useState("1");

  const handleConversion = (numValue, conversionType) => {
    if (isNaN(numValue)) {
      setResult("Not a Valid Number");
      return;
    }
    let wholeConversionResult;
    let resultUnit;
    let conversionMessage;
    switch (conversionType) {
      case '1':
        wholeConversionResult = (numValue / 1000);
        resultUnit = "Grams Per Cubic Centimeter";
        conversionMessage = `${numValue} Kilograms Per Cubic Meter = ${wholeConversionResult.toFixed(5)} Grams Per Cubic Centimeter`;
        break;
      case '2':
        wholeConversionResult = (numValue * 1000);
        resultUnit = "Kilograms Per Meter";
        conversionMessage = `${numValue} Grams Per Cubic Centimeter = ${wholeConversionResult.toFixed(5)} Kilograms Per Meter`;
        break;
      case '3':
        wholeConversionResult = (numValue * 16.018);
        resultUnit = "Kilograms Per Cubic Meter";
        conversionMessage = `${numValue} Pounds Per Cube Foot = ${wholeConversionResult.toFixed(5)} Kilograms Per Cubic Meter`;
        break;
      case '4':
        wholeConversionResult = (numValue / 16.018);
        resultUnit = "Pounds per Cube Foot";
        conversionMessage = `${numValue} Kilograms Per Cubic Meter = ${wholeConversionResult.toFixed(5)} Pounds per Cube Foot`;
        break;
      default:
        conversionMessage = "Cannot get data. Try with different data.";
    }
    setResult(conversionMessage);
  }
  useEffect(() => {
    const numValue = parseInt(value);
    if (value) {
      handleConversion(numValue, conversionType);
    }
  }, [value, conversionType])
  return (
    <div className='w-full bg-gradient-to-r from-indigo-600 to-amber-400 overflow-hidden'>
      <div className="text-5xl flex justify-center text-white pt-10">
        <h1>Density Conversions</h1>
        <lord-icon src="https://cdn.lordicon.com/caaolypd.json" trigger="hover" style={{ width: '80px', height: '80px' }}></lord-icon>

      </div>

      <div className="w-full max-w-4xl mx-auto  p-8 bg-white rounded-xl shadow-xl">
        <table className="w-full mt-10 bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-3 px-4 text-left">Conversion</th>
              <th className="py-3 px-4 text-center"></th>
              <th className="py-3 px-4 text-left">Result</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">1 Kilograms Per Cubic Meter</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.001 Grams per Cubic Centimeter</td>
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">1 Pounds Per Cubic Foot</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">16.018 Kilogram Per Meter</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mx-auto mt-12" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mb-2 text-sm font-medium text-gray-900 mt-4">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="1">Kilograms Per Cubic Meter to Grams Per Cubic Centimeter</option>
            <option value="2">Grams per Cubic Centimeter to Kilograms Per Meter</option>
            <option value="3">Pounds Per Cube Foot to Kilograms Per Cubic Meter</option>
            <option value="4">Kilograms Per Cubic Meter to Pounds per Cube Foot</option>
          </select>
          <Link to="/" className="mt-4 inline-block text-center w-full px-6 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500" >Home</Link>
        </form>
        {result && (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-500">Result:</h2>
          <p className="text-lg font-bold text-black">{result}</p>
        </div>
      )}
      </div>
   
    </div>
  )
}
export default DensityConversions;
