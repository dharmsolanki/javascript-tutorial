import { useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerate = useCallback(() => {
    let pass = "";

    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "01234567890";
    let specialChar = "!@#";
    if (charAllow) {
      string += specialChar;
    }
    if (numAllow) {
      string += number;
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerate();
  }, [length, numAllow, charAllow, passwordGenerate]);

  const passwordRef = useRef(null);
  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };
  return (
    <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 flex flex-col items-center space-y-8 text-white w-96 mx-auto">
      <h2 className="text-xl font-bold text-gray-100">Password Generator</h2>

      {/* Password display input */}
      <div className="w-full">
        <input
          type="text"
          className="p-3 w-full bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Generated Password"
          id="copyInput"
          value={password}
          readOnly
          ref={passwordRef}
        />
      </div>

      {/* Checkbox options */}
      <div className="w-full space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="num_allow"
            className="w-5 h-5 text-blue-500 bg-gray-800 border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            onChange={() => setNumAllow((prev) => !prev)}
            checked={numAllow}
          />
          <label htmlFor="num_allow" className="text-sm cursor-pointer">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="char_allow"
            className="w-5 h-5 text-blue-500 bg-gray-800 border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
            onChange={() => setCharAllow((prev) => !prev)}
            checked={charAllow}
          />
          <label htmlFor="char_allow" className="text-sm cursor-pointer">
            Include Characters
          </label>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white mb-4">Adjust Length: {length}</h2>

      <input
        type="range"
        id="slider"
        min="10"
        max="100"
        value={length}
        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setLength(e.target.value)}
      />

      {/* Copy button */}
      <button
        className="w-full px-4 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        onClick={copyPassword}
      >
        Copy Password
      </button>
    </div>
  );
}

export default App;
