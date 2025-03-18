import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const SpeedConversions = () => {
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
        wholeConversionResult = (numValue * 0.6213711922);
        resultUnit = "Miles Per Hours";
        conversionMessage = `${numValue} Kilometers Per Hour = ${wholeConversionResult.toFixed(2)} Miles Per Hours`;
        break;
      case '2':
        wholeConversionResult = (numValue / 0.6213711922);
        resultUnit = "Kilometers Per Hour";
        conversionMessage = `${numValue} Miles Per Hours = ${wholeConversionResult.toFixed(2)} Kilometer Per Hours`;
        break;
      case '3':
        wholeConversionResult = (numValue * 3.281);
        resultUnit = "Feet Per Seconds";
        conversionMessage = `${numValue} Meters Per Seconds = ${wholeConversionResult.toFixed(2)} Feet Per Seconds`;
        break;
      case '4':
        wholeConversionResult = (numValue / 3.28084);
        resultUnit = "Meters Per Seconds";
        conversionMessage = `${numValue} Feet Per Seconds = ${wholeConversionResult.toFixed(2)} Meters Per Seconds`;
        break;
      case '5':
        wholeConversionResult = (numValue * 1.852);
        resultUnit = "Knots";
        conversionMessage = `${numValue} Kilometers Per Hours = ${wholeConversionResult.toFixed(2)} Knots`;
        break;
      case '6':
        wholeConversionResult = (numValue / 1.852);
        resultUnit = "Kilometers Per Hours";
        conversionMessage = `${numValue} Knots = ${wholeConversionResult.toFixed(2)} Kilometers Per Hours`;
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
        <h1 className='text-white'>Speed Conversions</h1>
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
              <td className="py-3 px-4">1 Kilometer Per Hour</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.62137 Miles Per Hour</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Meter Per Second</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">3.281 Feet Per Second</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Knot</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">1.852 Kilometer Per Hour</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mt-12 mx-auto" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Kilometers Per Hour to Miles Per Hour</option>
            <option value="2">Miles Per Hour to Kilometers Per Hour</option>
            <option value="3">Meters Per Second to Feet Per Second</option>
            <option value="4">Feet Per Second to Meters Per Second</option>
            <option value="5">Knots to Kilometers Per Hour</option>
            <option value="6">Kilometers Per Hour to Knots</option>
          </select>
          <Link to="/" className="w-full mt-4 inline-block text-center py-2 px-4 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500" > Home</Link>
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
export default SpeedConversions;
