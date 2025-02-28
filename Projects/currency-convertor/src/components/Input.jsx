import { useRef } from "react";
import { useState } from "react";

function Input() {

  const [amount,setAmount] = useState("");
  const [convertedAmount,setConvertedAmount] = useState("");
  const [fromCurrency,setFromCurrency] = useState("USD");
  const [toCurrency,setToCurrency] = useState("EUR");
  
  const inputRef = useRef(null);

  const handleConvert = () => {
    const response = {
      "base_code": "USD",
      "conversion_rates": {
        "EUR": 0.92,
        "INR": 83.2,
        "GBP": 0.78,
        "JPY": 150.5
      }
    }

    const newAmount = Number(amount) * Number(response.base_code[fromCurrency])
    console.log(newAmount)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-80">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-5">
          Currency Converter
        </h2>

        {/* From Currency */}
        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
        <div className="flex items-center border border-gray-300 rounded-lg mb-4">
          <select className="bg-gray-100 text-gray-900 px-3 py-2 rounded-l-lg focus:outline-none" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>INR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
          <input
            ref={inputRef}
            type="number"
            className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* To Currency */}
        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
        <div className="flex items-center border border-gray-300 rounded-lg mb-4">
          <select className="bg-gray-100 text-gray-900 px-3 py-2 rounded-l-lg focus:outline-none" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>INR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
          <input
            type="number"
            className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 focus:outline-none"
            placeholder="Converted amount"
            value={convertedAmount}
            readOnly
          />
        </div>

        {/* Convert Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition" onClick={handleConvert}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default Input;
