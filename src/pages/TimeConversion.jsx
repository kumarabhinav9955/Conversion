import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'

const TimeConversion = () => {
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
        wholeConversionResult = (numValue * 60);
        resultUnit = "Minutes";
        conversionMessage = `${numValue} Hours = ${wholeConversionResult.toFixed(5)} Minutes`;
        break;
      case '2':
        wholeConversionResult = (numValue / 60);
        resultUnit = "Hours";
        conversionMessage = `${numValue} Minutes = ${wholeConversionResult.toFixed(5)} Hours`;
        break;
      case '3':
        wholeConversionResult = (numValue * 24);
        resultUnit = "Hours";
        conversionMessage = `${numValue} Days = ${wholeConversionResult.toFixed(5)} Hours`;
        break;
      case '4':
        wholeConversionResult = (numValue / 24);
        resultUnit = "Days";
        conversionMessage = `${numValue} Hours = ${wholeConversionResult.toFixed(5)} Days`;
        break;
      case '5':
        wholeConversionResult = (numValue * 7);
        resultUnit = "Days";
        conversionMessage = `${numValue} Weeks = ${wholeConversionResult.toFixed(5)} Days`;
        break;
      case '6':
        wholeConversionResult = (numValue / 7);
        resultUnit = "Weeks";
        conversionMessage = `${numValue} Days = ${wholeConversionResult.toFixed(5)} Weeks`;
        break;
      case '7':
        wholeConversionResult = (numValue * 30.417);
        resultUnit = "Days";
        conversionMessage = `${numValue} Month = ${wholeConversionResult.toFixed(5)} Days`;
        break;
      case '8':
        wholeConversionResult = (numValue / 30.417);
        resultUnit = "Month";
        conversionMessage = `${numValue} Days = ${wholeConversionResult.toFixed(5)} Month`;
        break;
      case '9':
        wholeConversionResult = (numValue * 365);
        resultUnit = "Days";
        conversionMessage = `${numValue} Years = ${wholeConversionResult.toFixed(5)} Days`;
        break;
      case '10':
        wholeConversionResult = (numValue / 365);
        resultUnit = "Years";
        conversionMessage = `${numValue} Days = ${wholeConversionResult.toFixed(5)} Years`;
        break;
      case '11':
        wholeConversionResult = (numValue * 60);
        resultUnit = "Seconds";
        conversionMessage = `${numValue} Minutes = ${wholeConversionResult.toFixed(5)} Seconds`;
        break;
      case '12':
        wholeConversionResult = (numValue / 60);
        resultUnit = "Minutes";
        conversionMessage = `${numValue} Seconds = ${wholeConversionResult.toFixed(5)} Minutes`;
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
        <h1 className='text-white'>Time Conversion</h1>
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
              <td className="py-3 px-4">1 Hour</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">60 Minutes</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Day</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">24 Hours</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Week</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">7 Days</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Month</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">30.417 Days (Approx)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Year</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">365 Days</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mx-auto mt-12" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Hours to Minutes</option>
            <option value="2">Minutes to Hours</option>
            <option value="3">Days to Hours</option>
            <option value="4">Hours to Days</option>
            <option value="5">Weeks to Days</option>
            <option value="6">Days to Weeks</option>
            <option value="7">Months to Days</option>
            <option value="8">Days to Months</option>
            <option value="9">Years to Days</option>
            <option value="10">Days to Years</option>
            <option value="11">Minutes to Seconds</option>
            <option value="12">Seconds to Minutes</option>
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
export default TimeConversion;
