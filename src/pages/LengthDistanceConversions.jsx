import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LengthDistanceConversions = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [conversionType, setConversionType] = useState("1");

  const handleConversion = (numValue,conversionType) => {
    if (isNaN(numValue)) {
      setResult("Not a Valid Number");
      return;
    }
    let wholeConversionResult;
    let resultUnit;
    let conversionMessage;
    switch (conversionType) {
      case '1':
        wholeConversionResult = numValue / 3.281;
        resultUnit = "Meters";
        conversionMessage = `${numValue} Feet = ${wholeConversionResult.toFixed(5)} Meters`;
        break;
      case '2':
        wholeConversionResult = numValue * 3.280839895;
        resultUnit = "Feet";
        conversionMessage = `${numValue} Meter = ${wholeConversionResult.toFixed(5)} Feet`;
        break;
      case '3':
        wholeConversionResult = numValue * 5280;
        resultUnit = "Feet";
        conversionMessage = `${numValue} Miles= ${wholeConversionResult.toFixed(5)} Feet`;
        break;
      case '4':
        wholeConversionResult = numValue / 5280;
        resultUnit = "Miles";
        conversionMessage = `${numValue} Feet = ${wholeConversionResult.toFixed(5)} Miles`;
        break;
      case '5':
        wholeConversionResult = numValue * 12;
        resultUnit = "Inches";
        conversionMessage = `${numValue} Feet = ${wholeConversionResult.toFixed(5)} Inches`;
        break;
      case '6':
        wholeConversionResult = numValue / 12;
        resultUnit = "Feet";
        conversionMessage = `${numValue} Inches = ${wholeConversionResult.toFixed(5)} Feet`;
        break;
      case '7':
        wholeConversionResult = numValue / 3;
        resultUnit = "Yards";
        conversionMessage = `${numValue} Feet = ${wholeConversionResult.toFixed(5)} Yards`;
        break;
      case '8':
        wholeConversionResult = numValue * 3;
        resultUnit = "Feet";
        conversionMessage = `${numValue} Yards = ${wholeConversionResult.toFixed(5)} Feet`;
        break;
      case '9':
        wholeConversionResult = numValue / 1000;
        resultUnit = "Meters";
        conversionMessage = `${numValue} Millimeters = ${wholeConversionResult.toFixed(5)} Meters`;
        break;
      case '10':
        wholeConversionResult = numValue * 1000;
        resultUnit = "Millimeter";
        conversionMessage = `${numValue} Meters = ${wholeConversionResult.toFixed(5)} Millimeter`;
        break;
      case '11':
        wholeConversionResult = numValue * 3.2217385421073E-17;
        resultUnit = "Light Years";
        conversionMessage = `${numValue} Feet = ${wholeConversionResult.toFixed(5)} Light Years`;
        break;
      case '12':
        wholeConversionResult = numValue / 3.2217385421073E-17;
        resultUnit = "Feet";
        conversionMessage = `${numValue} Light Year = ${wholeConversionResult.toFixed(5)} Feet`;
        break;
      case '13':
        wholeConversionResult = numValue / 6076.12;
        resultUnit = "Nautical Miles";
        conversionMessage = `${numValue} Feet = ${wholeConversionResult.toFixed(5)} Nautical Miles`;
        break;
      case '14':
        wholeConversionResult = numValue * 6076.12;
        resultUnit = "Feet";
        conversionMessage = `${numValue} Nautical Miles = ${wholeConversionResult.toFixed(5)} Feet`;
        break;
      case '15':
        wholeConversionResult = numValue / 1609.34;
        resultUnit = "Miles";
        conversionMessage = `${numValue} Meters = ${wholeConversionResult.toFixed(5)} Miles`;
        break;
      case '16':
        wholeConversionResult = numValue * 1609.34;
        resultUnit = "Meters";
        conversionMessage = `${numValue} Miles = ${wholeConversionResult.toFixed(5)} Meters`;
        break;
      default:
        conversionMessage = "Cannot get data. Try with different data.";
    }
    setResult(conversionMessage);
  };

  useEffect(()=>{
    const numValue=parseInt(value);
    if(value){
      handleConversion(numValue,conversionType);
    }
  },[value,conversionType])

  return (
    <>
      <div className="w-full bg-gradient-to-r from-indigo-600 to-amber-400 overflow-hidden">
        <div className="text-5xl flex justify-center text-white py-10">
          <h1>Length & Distance Conversions</h1>
          <lord-icon src="https://cdn.lordicon.com/caaolypd.json" trigger="hover" style={{ width: '80px', height: '80px' }}></lord-icon>
        </div>
        <div className="max-w-5xl mx-auto my-10 p-8 bg-white rounded-xl shadow-xl">
          <table className="min-w-full mb-8">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-3 px-4 text-left">Length</th>
                <th className="py-3 px-4 text-left"></th>
                <th className="py-3 px-4 text-left">Value</th>
              </tr>
            </thead>
            <tbody className="text-blue-900">
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Feet</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">0.3048 Meters</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Feet</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">0.000189393939... Miles</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Mile</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">5280 Feet</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Feet</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">12 inches</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Feet</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">0.3333 Yards</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Feet</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">3.2217385421073E-17 Light Year</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Feet</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">0.0001645787 Nautical Miles</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">1 Mile</td>
                <td className="py-3 px-4">=</td>
                <td className="py-3 px-4">1609.34 Meters</td>
              </tr>
            </tbody>
          </table>
          <form className="max-w-sm mx-auto mt-6" onSubmit={handleConversion}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your value" />
            <label htmlFor="conversionType" className="block mb-2 text-sm text-gray-900">Select Conversion:</label>
            <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="1">Feet to Meters</option>
              <option value="2">Meters to Feet</option>
              <option value="3">Feet to Miles</option>
              <option value="4">Miles to Feet</option>
              <option value="5">Feet to Inches</option>
              <option value="6">Inches to Feet</option>
              <option value="7">Feet to Yards</option>
              <option value="8">Yards to Feet</option>
              <option value="9">Meters to Millimeters</option>
              <option value="10">Millimeters to Meters</option>
              <option value="11">Feet to Light Years</option>
              <option value="12">Light Years to Feet</option>
              <option value="13">Feet to Nautical Miles</option>
              <option value="14">Nautical Miles to Feet</option>
              <option value="15">Meters to Miles</option>
              <option value="16">Miles to Meters</option>
            </select>
            <Link to="/" className="mt-4 inline-block text-center w-full px-6 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500" >Home</Link>
            {result && (
          <div className="text-center mt-6">
            <h2 className="text-xl font-semibold text-red-500">Result:</h2>
            <p className="text-lg font-bold text-black">{result}</p>
          </div>
        )}
          </form>
        </div>
      </div>
    </>
  );
};
export default LengthDistanceConversions;
