import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const VolumeCapacityConversions = () => {
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
        wholeConversionResult = numValue * 1000;
        resultUnit = "Milliliters";
        conversionMessage = `${numValue} Liters = ${wholeConversionResult.toFixed(5)} Milliliters`;
        break;
      case '2':
        wholeConversionResult = numValue / 1000;
        resultUnit = "Liters";
        conversionMessage = `${numValue} Milliliters = ${wholeConversionResult.toFixed(5)} Liters`;
        break;
      case '3':
        wholeConversionResult = numValue / 3.785;
        resultUnit = "Gallons";
        conversionMessage = `${numValue} Liters = ${wholeConversionResult.toFixed(5)} Gallons`;
        break;
      case '4':
        wholeConversionResult = numValue * 3.785;
        resultUnit = "Liters";
        conversionMessage = `${numValue} Gallons = ${wholeConversionResult.toFixed(5)} Liters`;
        break;
      case '5':
        wholeConversionResult = numValue * 8;
        resultUnit = "Pints";
        conversionMessage = `${numValue} Gallons = ${wholeConversionResult.toFixed(5)} Pints`;
        break;
      case '6':
        wholeConversionResult = numValue / 8;
        resultUnit = "Gallons";
        conversionMessage = `${numValue} Pints = ${wholeConversionResult.toFixed(5)} Gallons`;
        break;
      case '7':
        wholeConversionResult = numValue / 35.315;
        resultUnit = "Cubic Meters";
        conversionMessage = `${numValue} Cubic Feet = ${wholeConversionResult.toFixed(5)} Cubic Meters`;
        break;
      case '8':
        wholeConversionResult = numValue * 35.315;
        resultUnit = "Cubic Feet";
        conversionMessage = `${numValue} Cubic Meters = ${wholeConversionResult.toFixed(5)} Cubic Feet`;
        break;
      case '9':
        wholeConversionResult = numValue * 236.6;
        resultUnit = "Milliliters";
        conversionMessage = `${numValue} Cups = ${wholeConversionResult.toFixed(5)} Milliliters`;
        break;
      case '10':
        wholeConversionResult = numValue / 236.6;
        resultUnit = "Cups";
        conversionMessage = `${numValue} Milliliters = ${wholeConversionResult.toFixed(5)} Cups`;
        break;
      case '11':
        wholeConversionResult = numValue * 13.323;
        resultUnit = "Tablespoons";
        conversionMessage = `${numValue} Cups = ${wholeConversionResult.toFixed(5)} Tablespoons`;
        break;
      case '12':
        wholeConversionResult = numValue / 13.323;
        resultUnit = "Cups";
        conversionMessage = `${numValue} Tablespoons = ${wholeConversionResult.toFixed(5)} Cups`;
        break;
      case '13':
        wholeConversionResult = numValue / 61.024;
        resultUnit = "Liters";
        conversionMessage = `${numValue} Quarts = ${wholeConversionResult.toFixed(5)} Liters`;
        break;
      case '14':
        wholeConversionResult = numValue * 61.024;
        resultUnit = "Quarts";
        conversionMessage = `${numValue} Liters = ${wholeConversionResult.toFixed(5)} Quarts`;
        break;
      default:
        conversionMessage = "Cannot get data Try with different data";
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
      <div className="text-5xl flex justify-center py-10">
        <h1 className='text-white'>Volume Capacity Conversions</h1>
        <lord-icon src="https://cdn.lordicon.com/caaolypd.json" trigger="hover" style={{ width: '80px', height: '80px' }}></lord-icon>
      </div>
      <div className="w-full max-w-4xl mx-auto  p-8 bg-white rounded-xl shadow-lg">
        <table className="w-full table-auto bg-white shadow-md rounded-xl mb-8">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-3 px-4 text-left">Unit</th>
              <th className="py-3 px-4 text-center"></th>
              <th className="py-3 px-4 text-left">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Liter</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">1000 Milliliters</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Liter</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.2642 Gallons</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Gallon</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">8 Pints</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Cubic Foot</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.0283 Cubic Meters</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Cup</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">236.6 Milliliters</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Quart</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.9464 Liters</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mx-auto mt-12" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Liters to Milliliters</option>
            <option value="2">Milliliters to Liters</option>
            <option value="3">Liters to Gallons</option>
            <option value="4">Gallons to Liters</option>
            <option value="5">Gallons to Pints</option>
            <option value="6">Pints to Gallons</option>
            <option value="7">Cubic Feet to Cubic Meters</option>
            <option value="8">Cubic Meters to Cubic Feet</option>
            <option value="9">Cups to Milliliters</option>
            <option value="10">Milliliters to Cups</option>
            <option value="11">Cups to Tablespoons</option>
            <option value="12">Tablespoons to Cups</option>
            <option value="13">Quarts to Liters</option>
            <option value="14">Liters to Quarts</option>
          </select>
          <Link to="/" className="w-full mt-4 inline-block text-center py-2 px-4 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500">Home</Link>
        </form>
        {result && (
          <div className="text-center mt-6">
            <h2 className="text-xl font-semibold text-red-500">Result:</h2>
            <p className="text-lg font-bold text-black">{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default VolumeCapacityConversions
