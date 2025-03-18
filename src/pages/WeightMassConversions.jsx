import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const WeightMassConversions = () => {
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
        wholeConversionResult = numValue * 2.205;
        resultUnit = "Pounds";
        conversionMessage = `${numValue} Kilograms = ${wholeConversionResult.toFixed(5)} Pounds`;
        break;
      case '2':
        wholeConversionResult = numValue / 2.205;
        resultUnit = "Kilograms";
        conversionMessage = `${numValue} Pounds = ${wholeConversionResult.toFixed(5)} Kilograms`;
        break;
      case '3':
        wholeConversionResult = numValue * 1000;
        resultUnit = "Grams";
        conversionMessage = `${numValue} Kilograms = ${wholeConversionResult.toFixed(5)} Grams`;
        break;
      case '4':
        wholeConversionResult = numValue / 1000;
        resultUnit = "Kilograms";
        conversionMessage = `${numValue} Grams = ${wholeConversionResult.toFixed(5)} Kilograms`;
        break;
      case '5':
        wholeConversionResult = numValue * 35.274;
        resultUnit = "Ounce";
        conversionMessage = `${numValue} Kilograms = ${wholeConversionResult.toFixed(5)} Ounce`;
        break;
      case '6':
        wholeConversionResult = numValue / 35.274;
        resultUnit = "Kilograms";
        conversionMessage = `${numValue} Ounce = ${wholeConversionResult.toFixed(5)} Kilograms`;
        break;
      case '7':
        wholeConversionResult = numValue * 16;
        resultUnit = "Ounce";
        conversionMessage = `${numValue} Pounds = ${wholeConversionResult.toFixed(5)} Ounce`;
        break;
      case '8':
        wholeConversionResult = numValue / 16;
        resultUnit = "Pounds";
        conversionMessage = `${numValue} Ounce = ${wholeConversionResult.toFixed(5)} Pounds`;
        break;
      case '9':
        wholeConversionResult = numValue / 14;
        resultUnit = "Stones";
        conversionMessage = `${numValue} Pounds = ${wholeConversionResult.toFixed(5)} Stones`;
        break;
      case '10':
        wholeConversionResult = numValue * 14;
        resultUnit = "Pounds";
        conversionMessage = `${numValue} Stones = ${wholeConversionResult.toFixed(5)} Pounds`;
        break;
      case '11':
        wholeConversionResult = numValue * 1000;
        resultUnit = "Kilograms";
        conversionMessage = `${numValue} Tons = ${wholeConversionResult.toFixed(5)} Kilograms`;
        break;
      case '12':
        wholeConversionResult = numValue / 1000;
        resultUnit = "Tons";
        conversionMessage = `${numValue} Kilograms = ${wholeConversionResult.toFixed(5)} Tons`;
        break;
      case '13':
        wholeConversionResult = numValue * 2205;
        resultUnit = "Pounds";
        conversionMessage = `${numValue} Tons = ${wholeConversionResult.toFixed(5)} Pounds`;
        break;
      case '14':
        wholeConversionResult = numValue / 2205;
        resultUnit = "Tons";
        conversionMessage = `${numValue} Pounds = ${wholeConversionResult.toFixed(5)} Tons`;
        break;
      case '15':
        wholeConversionResult = numValue / 5;
        resultUnit = "Grams";
        conversionMessage = `${numValue} Carats = ${wholeConversionResult.toFixed(5)} Grams`;
        break;
      case '16':
        wholeConversionResult = numValue * 5;
        resultUnit = "Carats";
        conversionMessage = `${numValue} Grams = ${wholeConversionResult.toFixed(5)} Carats`;
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
    <div className="w-full bg-gradient-to-r from-indigo-600 to-amber-400 overflow-hidden">
      <div className="text-5xl flex justify-center py-10">
        <h1 className="text-white">Weight Mass Conversions</h1>
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
              <td className="py-3 px-4">1 Kilogram</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">2.205 Pounds</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Kilogram</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">1000 Grams</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Kilogram</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">35.274 Ounces</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Pound</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">16 Ounces</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Pound</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.07142 Stones</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Ton</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">1000 Kilograms</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1 Carats</td>
              <td className="py-3 px-4 text-center">=</td>
              <td className="py-3 px-4">0.20 Grams</td>
            </tr>
          </tbody>
        </table>
        <form className="max-w-sm mx-auto mt-12" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your value" />
          <label htmlFor="conversionType" className="block mt-4 mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="1">Kilograms to Pounds</option>
            <option value="2">Pounds to Kilograms</option>
            <option value="3">Kilograms to Grams</option>
            <option value="4">Grams to Kilograms</option>
            <option value="5">Kilograms to Ounces</option>
            <option value="6">Ounce to Kilograms</option>
            <option value="7">Pounds to Ounces</option>
            <option value="8">Ounces to Pounds</option>
            <option value="9">Pounds to Stones</option>
            <option value="10">Stones to Pounds</option>
            <option value="11">Tons to Kilograms</option>
            <option value="12">Kilograms to Tons</option>
            <option value="13">Tons to Pounds</option>
            <option value="14">Pounds to Tons</option>
            <option value="15">Carats to Grams</option>
            <option value="16">Grams to Carats</option>
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
  );
}
export default WeightMassConversions;
