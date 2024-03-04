import { z } from "zod";
import category from "../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Should contain 3 character " })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount  is requred" })
    .min(10)
    .max(1000000),
  category: z.enum(category, {
    errorMap: () => ({ message: "Category is requred" }),
  }),
});
type ExpenceFormData = z.infer<typeof Schema>;

interface props {
  onSubmit: (data: ExpenceFormData) => void;
}

const ExpenceForm = ({ onSubmit }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenceFormData>({
    resolver: zodResolver(Schema),
  });
  return (
    <>
      <h1 className="text-4xl  text-blue-500 font-extrabold mb-4 mt-8 text-center">
        Expense Tracker
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
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
              {...register("amount", { valueAsNumber: true })}
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
              {category.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-700">{errors.category.message}</p>
            )}
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenceForm;
