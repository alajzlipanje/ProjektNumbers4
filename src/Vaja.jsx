import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Vaja() {
  const [number, setnumber] = useState([1]);
  const [numbers, setnumbers] = useState([1, 2, 3]);
  return (
    <>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
      <h1>{number}</h1>
      <Button onclick={() => setNumber(math.random(1, 20))}>
        naključno št
      </Button>
    </>
  );
}
