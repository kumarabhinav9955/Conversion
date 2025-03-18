import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const PowerConversions = () => {
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
        resultUnit = "Kilowatts";
        conversionMessage = `${numValue} Watts = ${wholeConversionResult.toFixed(5)} Kilowatts`;
        break;
      case '2':
        wholeConversionResult = (numValue * 100);
        resultUnit = "Kilowatts";
        conversionMessage = `${numValue} Watts = ${wholeConversionResult.toFixed(5)} Kilowatts`;
        break;
      case '3':
        wholeConversionResult = (numValue * 745.7);
        resultUnit = "Watts";
        conversionMessage = `${numValue} Horse Power = ${wholeConversionResult.toFixed(5)} Watts`;
        break;
      case '4':
        wholeConversionResult = (numValue / 745.7);
        resultUnit = "Horse Power";
        conversionMessage = `${numValue} Watts = ${wholeConversionResult.toFixed(5)} Horse Power`;
        break;
      case '5':
        wholeConversionResult = (numValue * 0.29307107);
        resultUnit = "Watts";
        conversionMessage = `${numValue} BTU Per Hour = ${wholeConversionResult.toFixed(5)} Watts`;
        break;
      case '6':
        wholeConversionResult = (numValue / 0.29307107);
        resultUnit = "BTU Per Hour";
        conversionMessage = `${numValue} watts = ${wholeConversionResult.toFixed(5)} BTU Per Hour`;
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
      <div className="text-5xl flex justify-center text-white py-10">
        <h1>Power Conversions</h1>
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
              <td className="py-3 px-4">1 Watt</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.001 Kilowatts</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Horse Power</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">745.7 Watts</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 BTU Per Hour</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.293071 Watts</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mt-12 mx-auto" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Watts to Kilowatts</option>
            <option value="2">Kilowatts to Watts</option>
            <option value="3">Horse Power to Watts</option>
            <option value="4">Watts to Horse Power</option>
            <option value="5">BTU Per Hour to Watts</option>
            <option value="6">Watts to BTU Per Hour</option>
          </select>
          <Link to="/" className="w-full mt-4 inline-block text-center py-2 px-4 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500"> Home</Link>
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
export default PowerConversions;
