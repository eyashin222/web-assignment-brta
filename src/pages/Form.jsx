import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { getAdmin } from "../services/apiAdmins";

function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  function onError(error) {
    console.log(error);
  }
  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold text-gray-600">
        Registration form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mx-8 mt-5 max-w-lg sm:mx-auto md:mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="nidNumber"
            className="block text-sm font-medium text-gray-600"
          >
            NID Number
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="number"
            id="nidNumber"
            {...register("nidNumber", {
              required: "NID Number is required",
            })}
          />
          {errors.nidNumber && (
            <p className="text-sm text-red-400">{errors.nidNumber.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="vehicleNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Vehicle Number
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="number"
            id="vehicleNumber"
            {...register("vehicleNumber", {
              required: "Vehicle number is required",
            })}
          />
          {errors.vehicleNumber && (
            <p className="text-sm text-red-400">
              {errors.vehicleNumber.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="chassisNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Chassis Number
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="text"
            id="chassisNumber"
            {...register("chassisNumber", {
              required: "Chassis number is required",
            })}
          />
          {errors.chassisNumber && (
            <p className="text-sm text-red-400">
              {errors.chassisNumber.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="presentAdd"
            className="block text-sm font-medium text-gray-600"
          >
            Present Address
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="text"
            id="presentAdd"
            {...register("presentAdd", {
              required: "Present address is required",
            })}
          />
          {errors.presentAdd && (
            <p className="text-sm text-red-400">{errors.presentAdd.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="permanentAdd"
            className="block text-sm font-medium text-gray-600"
          >
            Permanent Address
          </label>
          <input
            className="mt-1 w-full rounded-md border p-2"
            type="text"
            id="permanentAdd"
            {...register("permanentAdd", {
              required: "Permanent Address is required",
            })}
          />
          {errors.permanentAdd && (
            <p className="text-sm text-red-400">
              {errors.permanentAdd.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-600"
          >
            Your Image
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-white p-2"
            type="file"
            id="image"
            {...register("image", {
              required: "Image is required",
            })}
          />
          {errors.image && (
            <p className="text-sm text-red-400">{errors.image.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="nidSoft"
            className="block text-sm font-medium text-gray-600"
          >
            NID Soft Copy
          </label>
          <input
            className="mt-1 w-full rounded-md border bg-white p-2"
            type="file"
            id="nidSoft"
            {...register("nidSoft", {
              required: "Provide your NID soft copy",
            })}
          />
          {errors.nidSoft && (
            <p className="text-sm text-red-400">{errors.nidSoft.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Button StyleType="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
export default Form;
