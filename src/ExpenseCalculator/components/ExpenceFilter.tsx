import category from "../categories";
interface props {
  Selection: (category: string) => void;
}

const ExpenceFilter = ({ Selection }: props) => {
  return (
    <select
      onChange={(event) => Selection(event.target.value)}
      className="p-2 border rounded-md"
    >
      <option value="" className="text-gray-500">
        All Category
      </option>
      {category.map((category) => (
        <option key={category} value="category" className="text-green-500">
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenceFilter;
