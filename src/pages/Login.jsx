import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Header from "../ui/Header";

function Login() {
  const { register, handleSubmit, formState: errors } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center">
        <form
          onClick={handleSubmit(onSubmit)}
          className="mb-4 w-full max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              className="mt-1 w-full rounded-md border p-2"
              type="email"
              id="email"
              {...register("email", {
                required: "Enter your email",
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              className="mt-1 w-full rounded-md border p-2"
              type="password"
              id="password"
              {...register("password", {
                required: "Enter your password",
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Button StyleType="submit">Login</Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
