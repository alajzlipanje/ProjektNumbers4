import { Input } from "postcss";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Country from "./Country";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Vaja from "./Vaja";
import { Checkbox } from "@/components/ui/checkbox";

export default function App() {
  const [fact, setFact] = useState({});
  const [numbers, setNumber] = useState(0);
  const [countries, setcountries] = useState([]);
  const [region, setRegion] = useState("");
  const [landlocked, setLandLocked] = useState(true);

  async function getRandomFact() {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }

  async function Countries() {
    const country = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,borders,region,flags,landlocked",
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
      <div className="grid grid-cols-3 gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Select region</CardTitle>
          </CardHeader>
          <Select onValueChange={(value) => setRegion(value)}>
            <SelectTrigger className="w-[260px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Asia">Asia</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Americas">Americas</SelectItem>
              <SelectItem value="Africa">Afrika</SelectItem>
              <SelectItem value="Oceania">Oceania</SelectItem>
            </SelectContent>
          </Select>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Landlocked countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Landlocked countries only
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>

      <Carousel>
        <CarouselContent>
          {countries
            .filter((country) => region == "All" || country.region == region)
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
