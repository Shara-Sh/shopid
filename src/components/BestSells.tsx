import bestSells from "../data/bestSells.json";

function BestSells() {
  return (
    <div className="space-y-3">
      <h1 className="text-center font-bold">Best Sells</h1>
      <div className="grid grid-cols-6 place-items-center">
        {bestSells.map((bestSells, index) => (
          <img
            key={index}
            src={bestSells.image}
            alt={bestSells.name}
            className="size-44 cursor-pointer object-contain hover:brightness-75"
          />
        ))}
      </div>
    </div>
  );
}

export default BestSells;
