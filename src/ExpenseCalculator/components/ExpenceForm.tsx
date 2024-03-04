import { category } from "../../App";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";

const Schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(10).max(1000000),
  category: z.enum(category),
});
type ExpenceFormData = z.infer<typeof Schema>;

const ExpenceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenceFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <>
      <h1 className="text-4xl  text-blue-500 font-extrabold mb-4 mt-8 text-center">
        Expense Tracker
      </h1>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="mb-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="mt-1 p-2 border rounded-md w-64"
          />
          {errors.description && (
            <p className="text-red-700">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-600"
          >
            Amount
          </label>
          <input
            {...register("amount")}
            id="amount"
            type="number"
            className="mt-1 p-2 border rounded-md w-64"
          />
          {errors.amount && (
            <p className="text-red-700">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            {...register("category")}
            name="category"
            id="category"
            className="mt-1 p-2 border rounded-md w-64 text-green-500"
          >
            {errors.category && (
              <p className="text-red-700">{errors.category.message}</p>
            )}

            {category.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </>
  );
};

export default ExpenceForm;
