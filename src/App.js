import { useState } from "react";
import Convert from "./components/Convert/Convert";
import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import Select from "./components/Select/Select";

function App() {
  const [result, setResult] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const currency = event.target.currency.value;
    const amount = event.target.amount.value;

    if (currency && amount) {
      const url =
        "https://api.nbp.pl/api/exchangerates/rates/a/" +
        currency +
        "/?format=json";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[0].mid;
          const result = amount * rate;

          setResult(
            amount + " " + currency + " = " + result.toFixed(2) + " PLN"
          );
        })
        .catch((error) =>
          console.error("Błąd pobierania danych z API: ", error)
        );
    } else {
      alert("Proszę wybrać walutę i podać kwotę.");
    }
  }

  return (
    <>
      <h1>Przelicznik Walut</h1>
      <form id="form" onSubmit={handleSubmit}>
        <Select />

        <Input />
        <Convert></Convert>
      </form>
      <Result result={result} />
    </>
  );
}

export default App;
