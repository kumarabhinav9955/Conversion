import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const TemperatureConversions = () => {
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
        wholeConversionResult = numValue * 9 / 5 + 32;
        resultUnit = "Fahrenheit";
        conversionMessage = `${numValue} Celsius = ${wholeConversionResult.toFixed(5)} Fahrenheit`;
        break;
      case '2':
        wholeConversionResult = (numValue - 32) * 5 / 9;
        resultUnit = "Celsius";
        conversionMessage = `${numValue} Fahrenheit = ${wholeConversionResult.toFixed(5)} Celsius`;
        break;
      case '3':
        wholeConversionResult = (numValue * 3.281);
        resultUnit = "Kelvin";
        conversionMessage = `${numValue} Celsius = ${wholeConversionResult.toFixed(5)} Kelvin`;
        break;
      case '4':
        wholeConversionResult = (numValue / 3.281);
        resultUnit = "Celsius";
        conversionMessage = `${numValue} Kelvin = ${wholeConversionResult.toFixed(5)} Celsius`;
        break;
      case '5':
        wholeConversionResult = (numValue * 1.852);
        resultUnit = "Kelvin";
        conversionMessage = `${numValue} Fahrenheit = ${wholeConversionResult.toFixed(5)} Kelvin`;
        break;
      case '6':
        wholeConversionResult = (numValue / 1.852);
        resultUnit = "Fahrenheit";
        conversionMessage = `${numValue} Kelvin = ${wholeConversionResult.toFixed(5)} Fahrenheit`;
        break;
      default:
        conversionMessage = "Cannot get data. Try with different data";
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
        <h1 className='text-white'>Temperature Conversions</h1>
        <lord-icon src="https://cdn.lordicon.com/caaolypd.json" trigger="hover" style={{ width: '80px', height: '80px' }}></lord-icon>
      </div>

      <div className="w-full max-w-4xl mx-auto  p-8 bg-white rounded-xl shadow-lg">
        <table className="w-full table-auto bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-3 px-4 text-left">Unit</th>
              <th className="py-3 px-4 text-center"></th>
              <th className="py-3 px-4 text-left">Value</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Celsius</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">33.8 Fahrenheit</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Celsius</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">3.281 Kelvin</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Fahrenheit</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">1.852 Kelvin</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mt-12 mx-auto" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Celsius to Fahrenheit</option>
            <option value="2">Fahrenheit to Celsius</option>
            <option value="3">Celsius to Kelvin</option>
            <option value="4">Kelvin to Celsius</option>
            <option value="5">Fahrenheit to Kelvin</option>
            <option value="6">Kelvin to Fahrenheit</option>
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
export default TemperatureConversions;
