import { useFormContext } from "react-hook-form";

const InputFullName = () => {
  const { register } = useFormContext();

  return (
    <div className="w-full mb-2">
      <label htmlFor="fullName" className="block text-left">
        Fullname
      </label>
      <input
        id="fullName"
        {...register("fullName")}
        className="w-full outline-none border p-1"
      />
    </div>
  );
};

export default InputFullName;
