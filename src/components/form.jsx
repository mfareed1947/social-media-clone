import { Link } from "react-router";
import { months, years } from "../constant";
import { useNavigate } from "react-router";

const Form = ({ handleSubmit, register, errors, setUserDetails }) => {
  let navigate = useNavigate();

  // console.log(errors);
  const submitData = (data) => {
    console.log(data);
    delete data.password;
    setUserDetails({
      firstName: data.firstName,
      surName: data.surName,
      email: data.email,
    });
    localStorage.setItem("currentUser", JSON.stringify(data));
    if (data.email) {
      navigate("/home");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="w-[600px] py-2 px-4 h-full bg-white shadow-lg rounded-2xl"
    >
      <h3 className="text-center text-2xl pt-2">Create new account</h3>
      <p className="text-center text-gray-300">It's quick and easy.</p>
      <div className="flex gap-2 flex-col">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="p-2 border border-gray-200"
            type="text"
            {...register("firstName", {
              required: "Please enter your first name.",
            })}
            placeholder="first name"
          />

          <input
            className="p-2 border border-gray-200"
            type="text"
            {...register("surName")}
            placeholder="surname"
          />
          <div className="h-10">
            {errors?.firstName && (
              <span className="text-red-500">{errors?.firstName?.message}</span>
            )}
          </div>
          <div className="h-10">
            {errors?.surName && (
              <span className="text-red-500">{errors?.surName?.message}</span>
            )}
          </div>
        </div>
        <div>
          <span>Date of birth</span>
          <div className="grid grid-cols-3 gap-4">
            <select {...register("date")} name="date" id="date">
              {Array.from({ length: 31 }, (v, i) => i + 1).map((date) => {
                return (
                  <option key={date} value={date}>
                    {date}
                  </option>
                );
              })}
            </select>
            <select {...register("month")} name="month" id="month">
              {months.map((month, ind) => {
                return (
                  <option key={ind} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
            <select {...register("year")} name="year" id="year">
              {years.map((year, ind) => {
                return (
                  <option key={ind} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <span>Gender</span>
        <div className="grid grid-cols-3 gap-2">
          <label
            className="border border-gray-200 p-2 flex justify-between"
            htmlFor="female"
          >
            <span>Female</span>
            <input
              className=""
              {...register("gender")}
              type="radio"
              name="gender"
              id="female"
              value={"female"}
            />
          </label>
          <label
            className="border border-gray-200 p-2 flex justify-between"
            htmlFor="male"
          >
            <span>Male</span>
            <input
              className=""
              {...register("gender")}
              type="radio"
              name="gender"
              id="male"
              value={"male"}
            />
          </label>
          <label
            className="border border-gray-200 p-2 flex justify-between"
            htmlFor="custom"
          >
            <span>Custom</span>
            <input
              className=""
              {...register("gender")}
              type="radio"
              name="gender"
              id="custom"
              value={"custom"}
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("email")}
            className="p-2 border border-gray-200"
            type="text"
            placeholder="mobile number or email"
          />
          <input
            {...register("password")}
            className="p-2 border border-gray-200"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="h-10">
          {errors?.password && (
            <span className="text-red-500">{errors?.password?.message}</span>
          )}
        </div>
        <p className="w-2/3 text-sm text-gray-500">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p className="w-2/3 text-sm text-gray-500">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <div className="flex justify-center flex-col items-center">
          <button
            type="submit"
            className="py-2 px-4 w-56 bg-green-500 text-white"
          >
            Sign up
          </button>
          <Link to={"/login"}>Already have an account</Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
