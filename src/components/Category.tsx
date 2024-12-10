import category from "../data/category.json";

function Category() {
  return (
    <div className="space-y-3">
      <h1 className="text-center font-bold">Category</h1>
      <div className="flex justify-between">
        {category.map((category, index) => (
          <img
            key={index}
            src={category.image}
            alt={category.name}
            className="size-20 cursor-pointer rounded-full object-cover hover:brightness-75"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
