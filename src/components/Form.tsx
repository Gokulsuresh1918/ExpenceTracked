import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "name must be 3 character" }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});


type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div className="max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Expence Tracker</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.name && (
            <p className="text-amber-700">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            AGE
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="age"
            name="age"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.age && <p className="text-amber-700">{errors.age.message}</p>}
        </div>

        <button
          disabled={!isValid}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
