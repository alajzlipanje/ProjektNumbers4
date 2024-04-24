import { Input } from "postcss";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Country from "./Country";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function App() {
  const [fact, setFact] = useState({});
  const [numbers, setNumber] = useState(0);
  const [countries, setcountries] = useState([]);
  const [region, setRegion] = useState("");

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
      <h1>Države</h1>
      <Select onValueChange={(value) => setRegion(value)}>
        <SelectTrigger className="w-[260px]">
          <SelectValue placeholder="Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Africa">Afrika</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>

      <Carousel>
        <CarouselContent>
          {countries
            .filter((country) => country.region == region)
            .map((country) => (
              <CarouselItem className="basis-1/3">
                <Country data={country}></Country>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
