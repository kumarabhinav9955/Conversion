import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const AreaConversions = () => {
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
        wholeConversionResult = numValue / 9;
        resultUnit = "Square Yards";
        conversionMessage = `${numValue} Square Feet = ${wholeConversionResult.toFixed(5)} Square Yards`;
        break;
      case '2':
        wholeConversionResult = numValue * 9;
        resultUnit = "Square Feet";
        conversionMessage = `${numValue} Square Yards = ${wholeConversionResult.toFixed(5)} Square Feet`;
        break;
      case '3':
        wholeConversionResult = numValue / 8.914;
        resultUnit = "Gaj";
        conversionMessage = `${numValue} Square Feet = ${wholeConversionResult.toFixed(5)} Gaj`;
        break;
      case '4':
        wholeConversionResult = numValue * 8.914;
        resultUnit = "Square Feet";
        conversionMessage = `${numValue} Gaj = ${wholeConversionResult.toFixed(5)} Square Feet`;
        break;
      case '5':
        wholeConversionResult = numValue / 10.764;
        resultUnit = "Square Meter";
        conversionMessage = `${numValue} Square Feet = ${wholeConversionResult.toFixed(5)} Square Meter`;
        break;
      case '6':
        wholeConversionResult = numValue * 10.764;
        resultUnit = "Square Feet";
        conversionMessage = `${numValue} Square Meter = ${wholeConversionResult.toFixed(5)} Square Feet`;
        break;
      case '7':
        wholeConversionResult = numValue / 4047;
        resultUnit = "Acres";
        conversionMessage = `${numValue} Square Meter = ${wholeConversionResult.toFixed(5)} Acres`;
        break;
      case '8':
        wholeConversionResult = numValue * 4047;
        resultUnit = "Square Meter";
        conversionMessage = `${numValue} Acres = ${wholeConversionResult.toFixed(5)} Square Meter`;
        break;
      case '9':
        wholeConversionResult = numValue / 4840;
        resultUnit = "Acres";
        conversionMessage = `${numValue} Square Yards = ${wholeConversionResult.toFixed(5)} Acres`;
        break;
      case '10':
        wholeConversionResult = numValue * 4840;
        resultUnit = "Square Meter";
        conversionMessage = `${numValue} Acres = ${wholeConversionResult.toFixed(5)} Square Meter`;
        break;
      case '11':
        wholeConversionResult = numValue * 2.47105;
        resultUnit = "Acres";
        conversionMessage = `${numValue} Hectares = ${wholeConversionResult.toFixed(5)} Acres`;
        break;
      case '12':
        wholeConversionResult = numValue / 2.47105;
        resultUnit = "Hectares";
        conversionMessage = `${numValue} Acres = ${wholeConversionResult.toFixed(5)} Hectares`;
        break;
      case '13':
        wholeConversionResult = numValue * 1009.82;
        resultUnit = "Square Meter";
        conversionMessage = `${numValue} Bigha = ${wholeConversionResult.toFixed(5)} Square Meter`;
        break;
      case '14':
        wholeConversionResult = numValue / 1009.82;
        resultUnit = "Bigha";
        conversionMessage = `${numValue} Square Meter = ${wholeConversionResult.toFixed(5)} Bigha`;
        break;
      case '15':
        wholeConversionResult = numValue * 7.47494101;
        resultUnit = "Hectares";
        conversionMessage = `${numValue} Bigha = ${wholeConversionResult.toFixed(5)} Hectares`;
        break;
      case '16':
        wholeConversionResult = numValue / 7.47494101;
        resultUnit = "Bigha";
        conversionMessage = `${numValue} Hectares = ${wholeConversionResult.toFixed(5)} Bigha`;
        break;
      case '17':
        wholeConversionResult = numValue * 272.3;
        resultUnit = "Square Feet";
        conversionMessage = `${numValue} Marla = ${wholeConversionResult.toFixed(5)} Square Feet`;
        break;
      case '18':
        wholeConversionResult = numValue / 272.3;
        resultUnit = "Marla";
        conversionMessage = `${numValue} Square Feet = ${wholeConversionResult.toFixed(5)} Marla`;
        break;
      default:
        conversionMessage = "Cannot get data. Try with different data.";
    }
    setResult(conversionMessage);
  };

  useEffect(() => {
    const numValue = parseInt(value);
    if (value) {
      handleConversion(numValue, conversionType);
    }
  }, [value, conversionType])

  return (
    <div className='w-full bg-gradient-to-r from-indigo-600 to-amber-400 overflow-x-hidden overflow-y-hidden'>
      <div className="text-5xl flex justify-center text-white pt-10">
        <h1>Area Conversions</h1>
        <lord-icon src="https://cdn.lordicon.com/caaolypd.json" trigger="hover" style={{ width: '80px', height: '80px' }}></lord-icon>
      </div>
      <div className="max-w-5xl mx-auto my-10 p-8 bg-white rounded-xl shadow-xl">
        <table className="min-w-full mb-8">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-3 px-4 text-left">Area</th>
              <th className="py-3 px-4 text-left"></th>
              <th className="py-3 px-4 text-left">Value</th>
            </tr>
          </thead>
          <tbody className="text-blue-900">
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Square Feet</td>
              <td className="py-3 px-4">=</td>
              <td className="py-3 px-4">0.11111 Square Yards</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Square Feet</td>
              <td className="py-3 px-4">=</td>
              <td className="py-3 px-4">0.1111111 Gaj</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Bigha</td>
              <td className="py-3 px-4">=</td>
              <td className="py-3 px-4">2500 to 3000 Square Meters</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Hectare</td>
              <td className="py-3 px-4">=</td>
              <td className="py-3 px-4">3.33 to 4 Bigha</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Marla</td>
              <td className="py-3 px-4">=</td>
              <td className="py-3 px-4">272.25 Square Feet</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mx-auto mt-6" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mb-2 text-sm text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="1">Square Feet to Square Yards</option>
            <option value="2">Square Yards to Square Feet</option>
            <option value="3">Square Feet to Gaj</option>
            <option value="4">Gaj to Square Feet</option>
            <option value="5">Square Feet to Square Meter</option>
            <option value="6">Square Meter to Square Feet</option>
            <option value="7">Square Meter to Acres</option>
            <option value="8">Acres to Square Meter</option>
            <option value="9">Square Yards to Acres</option>
            <option value="10">Acres to Square Yards</option>
            <option value="11">Hectares to Acres</option>
            <option value="12">Acres to Hectares</option>
            <option value="13">Bigha to Square Meter</option>
            <option value="14">Square Meter to Bigha</option>
            <option value="15">Bigha to Hectares</option>
            <option value="16">Hectares to Bigha</option>
            <option value="17">Marla to Square Feet</option>
            <option value="18">Square Feet to Marla</option>
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
  );
};
export default AreaConversions;
