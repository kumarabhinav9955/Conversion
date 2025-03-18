import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const CurrencyConversions = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [conversionType, setConversionType] = useState("1");

  const API_KEY = '920d9387c1ff431bb2fdf5ab32cba15a';
  const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

  const handleConversion = async (numValue,conversionType) => {
    if (isNaN(numValue)) {
      setResult("Not a Valid Number");
      return;
    }
    let fromCurrency = '';
    let toCurrency = '';
    switch (conversionType) {
      case '1':
        fromCurrency = 'USD';
        toCurrency = 'INR';
        break;
      case '2':
        fromCurrency = 'INR';
        toCurrency = 'USD';
        break;
      case '3':
        fromCurrency = 'USD';
        toCurrency = 'EUR';
        break;
      case '4':
        fromCurrency = 'EUR';
        toCurrency = 'USD';
        break;
      case '5':
        fromCurrency = 'EUR';
        toCurrency = 'GBP';
        break;
      case '6':
        fromCurrency = 'GBP';
        toCurrency = 'EUR';
        break;
      case '7':
        fromCurrency = 'GBP';
        toCurrency = 'INR';
        break;
      case '8':
        fromCurrency = 'INR';
        toCurrency = 'GBP';
        break;
      default:
        setResult("Please select a valid conversion type");
        return;
    }
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);
      const rates = response.data.rates;
      if (rates[fromCurrency] && rates[toCurrency]) {
        const conversionRate = rates[toCurrency] / rates[fromCurrency];
        const convertedValue = numValue * conversionRate;
        setResult(`${numValue} ${fromCurrency} = ${convertedValue.toFixed(5)} ${toCurrency}`);
      } else {
        setResult("Invalid currency pair selected");
      }
    } catch (error) {
      setResult("Failed to fetch conversion data. Please try again.");
      console.error("Error fetching conversion data: ", error);
    }
  }
   useEffect(()=>{
        const numValue=parseInt(value);
        if(value){
          handleConversion(numValue,conversionType);
        }
      },[value,conversionType])
  return (
    <div className='w-full bg-gradient-to-r from-indigo-600 to-amber-400 overflow-x-hidden overflow-y-hidden'>
      <div className="text-5xl flex justify-center text-white pt-10">
        <h1>Currency Conversions</h1>
        <lord-icon src="https://cdn.lordicon.com/caaolypd.json" trigger="hover" style={{ width: '80px', height: '80px' }}></lord-icon>
      </div>
      <div className="w-full max-w-5xl mx-auto  p-8 bg-white rounded-xl shadow-xl">
        <form className="max-w-sm mx-auto" onSubmit={handleConversion}>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your value" />          <label htmlFor="conversionType" className="block mb-2 text-sm font-medium text-gray-900">Select Conversion:</label>
          <select id="conversionType" onChange={(e) => setConversionType(e.target.value)} value={conversionType} className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="1">USD to INR</option>
            <option value="2">INR to USD</option>
            <option value="3">USD to EUR</option>
            <option value="4">EUR to USD</option>
            <option value="5">EUR to GBP</option>
            <option value="6">GBP to EUR</option>
            <option value="7">GBP to INR</option>
            <option value="8">INR to GBP</option>
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
}
export default CurrencyConversions;
