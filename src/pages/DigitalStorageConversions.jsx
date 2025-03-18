import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DigitalStorageConversions = () => {
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
        wholeConversionResult = (numValue / 8);
        resultUnit = "Bytes";
        conversionMessage = `${numValue} Bits = ${wholeConversionResult.toFixed(5)} Bytes`;
        break;
      case '2':
        wholeConversionResult = (numValue * 8);
        resultUnit = "Bits";
        conversionMessage = `${numValue} Bytes = ${wholeConversionResult.toFixed(5)} Bits`;
        break;
      case '3':
        wholeConversionResult = (numValue / 1000);
        resultUnit = "Kilobytes";
        conversionMessage = `${numValue} Bytes = ${wholeConversionResult.toFixed(5)} Kilobytes`;
        break;
      case '4':
        wholeConversionResult = (numValue * 1000);
        resultUnit = "Bytes";
        conversionMessage = `${numValue} Kilobytes = ${wholeConversionResult.toFixed(5)} Bytes`;
        break;
      case '5':
        wholeConversionResult = (numValue / 1000);
        resultUnit = "Megabytes";
        conversionMessage = `${numValue} Kilobytes = ${wholeConversionResult.toFixed(5)} Megabytes`;
        break;
      case '6':
        wholeConversionResult = (numValue * 1000);
        resultUnit = "Kilobytes";
        conversionMessage = `${numValue} Megabytes = ${wholeConversionResult.toFixed(5)} Kilobytes`;
        break;
      case '7':
        wholeConversionResult = (numValue / 1000);
        resultUnit = "Gigabytes";
        conversionMessage = `${numValue} Megabytes = ${wholeConversionResult.toFixed(5)} Gigabytes`;
        break;
      case '8':
        wholeConversionResult = (numValue * 1000);
        resultUnit = "Megabytes";
        conversionMessage = `${numValue} Gigabytes = ${wholeConversionResult.toFixed(5)} Megabytes`;
        break;
      case '9':
        wholeConversionResult = (numValue / 1000);
        resultUnit = "Terabytes";
        conversionMessage = `${numValue} Gigabytes = ${wholeConversionResult.toFixed(5)} Terabytes`;
        break;
      case '10':
        wholeConversionResult = (numValue * 1000);
        resultUnit = "Gigabytes";
        conversionMessage = `${numValue} Terabytes = ${wholeConversionResult.toFixed(5)} Gigabytes`;
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
    <div className='w-full bg-gradient-to-r  from-indigo-600 to-amber-400'>
      <div className="text-5xl flex justify-center text-white pt-10">
        <h1>Digital Storage Conversions</h1>
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
              <td className="py-3 px-4">1 Bit</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.125 Bytes</td>
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">1 Byte</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.001 Kilobytes</td>
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">1 Megabyte</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.001 Gigabytes</td>
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">1 Kilobyte</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.001 Megabytes</td>
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">1 Gigabyte</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.001 Terabytes</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mt-12 mx-auto" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Bits to Bytes</option>
            <option value="2">Bytes to Bits</option>
            <option value="3">Bytes to Kilobytes</option>
            <option value="4">Kilobytes to Bytes</option>
            <option value="5">Kilobytes to Megabytes</option>
            <option value="6">Megabytes to Kilobytes</option>
            <option value="7">Megabytes to Gigabytes</option>
            <option value="8">Gigabytes to Megabytes</option>
            <option value="9">Gigabytes to Terabytes</option>
            <option value="10">Terabytes to Gigabytes</option>
          </select>
          <Link to="/" className="mt-4 inline-block text-center w-full px-6 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500" >Home</Link>
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
export default DigitalStorageConversions;
