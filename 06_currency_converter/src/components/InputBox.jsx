import React, {useId} from "react";
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,  
    className = "",
  }) {
  const amountInputId = useId()

    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label 
            htmlFor={amountInputId} 
            className="text-black/40 mb-2 inline-block"
            >
              {label}
            </label>
          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select 
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  
  export default InputBox;


  // note:
  // Always use key while looping and mapping over an array in React to display a component
  // If we don't use the key, the performance will be greatly degraded.
  // jab bhi hum kisi "jsx" file ke ander loop lagayenge (kyunki "jsx" se hi humare DOM elements bn rhe hai) to hume ek key pass krni pdegi.
  // kyunki react ko pata hi nhi hai ki wo jo DOM banaye ja rha hai, banaye ja rha hai.... to wo ek hi element to 1000 bar nhi bna rha.
  // so to stop this we have one field named "key".