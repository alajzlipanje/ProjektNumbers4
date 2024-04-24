import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Country(props) {
  const { flag, name } = props.data;
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{name.common}</CardTitle>
          <CardDescription>A country</CardDescription>
        </CardHeader>
        <CardContent>
          <p></p>
        </CardContent>
        <CardFooter>
          <p>{flag}</p>
        </CardFooter>
      </Card>
    </>
  );
}
