import { Input } from "postcss";
import { useEffect, useState } from "react";

export default function App() {
  const [fact, setFact] = useState({});
  const [numbers, setNumber] = useState(0);
  const [countries, setcountries] = useState([]);
  const [colors, setColors] = useState([
    "rdeča",
    "rumena",
    "modra",
    "zelena",
    "oranžna",
  ]);

  async function getRandomFact() {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }

  async function Countries() {
    const country = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,borders,region",
    );
    const country12 = await country.json();
    setcountries(country12);
  }

  useEffect(() => {
    Countries();
  }, []);

  return (
    <>
      {countries
        .filter((country) => country.region == "Europe")
        .map((country) => (
          <p>{country.name.common}</p>
        ))}
      {colors.map((color) => (
        <p>{color}</p>
      ))}
    </>
  );
}
