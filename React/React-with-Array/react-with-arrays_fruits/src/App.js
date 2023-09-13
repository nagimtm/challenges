import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      name: "Persimmon",
      id: 52,
      family: "Ebenaceae",
      color: "orange",
    },
    {
      name: "Strawberry",
      id: 3,
      family: "Rosaceae",
      color: "red",
    },
    {
      name: "Banana",
      id: 1,
      family: "Musaceae",
      color: "yellow",
    },
    {
      name: "Tomato",
      id: 5,
      family: "Solanaceae",
      color: "red",
    },
    {
      name: "Pear",
      id: 4,
      family: "Rosaceae",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
