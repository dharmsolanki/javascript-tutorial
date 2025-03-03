import { useEffect, useRef } from "react";
import { useState } from "react";
import Select from "react-select";

function Input() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#F3F4F6', // light gray similar to Tailwind's bg-gray-100
      borderColor: '#D1D5DB', // border-gray-300
      padding: '2px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      zIndex: 9999, // Make sure it appears on top
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#E5E7EB' : 'white', // hover:bg-gray-200
      color: '#1F2937', // text-gray-800
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#1F2937', // text-gray-800
    }),
  };
  

  const inputRef = useRef(null);
  useEffect(() => {
    const currencyCodeApi = `https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_l2lqx698QJjoyej2SAEPLOtGaGQt8eldLosKVU2d`;
    fetch(currencyCodeApi)
      .then((res) => res.json())
      .then((data) => {
        const codes = Object.keys(data.data).map((code) => ({
          value: code,
          label: code,
        }));
        setCurrencyCodes(codes);
      })
      .catch((error) => console.error("Error fetching currency codes:", error));
  }, []);

  const handleConvert = () => {
    const api = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_l2lqx698QJjoyej2SAEPLOtGaGQt8eldLosKVU2d&currencies=${toCurrency}&base_currency=${fromCurrency}`;

    fetch(api)
      .then((response) => response.json())
      .then((currency) => {
        const newAmount =
          parseFloat(currency.data[toCurrency]) * parseFloat(amount);
        setConvertedAmount(newAmount.toFixed(2));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          🌍 Currency Converter
        </h2>

        {/* From Currency */}
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          From
        </label>
        <div className="flex flex-col gap-2 mb-6">
          <Select
            options={currencyCodes}
            value={{ value: fromCurrency, label: fromCurrency }}
            onChange={(selected) => setFromCurrency(selected.value)}
            className="text-left"
            placeholder="Select currency"
            styles={customStyles}
          />
          <input
            ref={inputRef}
            type="number"
            className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* To Currency */}
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          To
        </label>
        <div className="flex flex-col gap-2 mb-6">
          <Select
            options={currencyCodes}
            value={{ value: toCurrency, label: toCurrency }}
            onChange={(selected) => setToCurrency(selected.value)}
            className="text-left"
            placeholder="Select currency"
            styles={customStyles}
          />
          <input
            type="number"
            className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Converted amount"
            value={convertedAmount}
            readOnly
          />
        </div>

        {/* Convert Button */}
        <button
          className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default Input;
