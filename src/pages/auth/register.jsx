import { useForm } from "react-hook-form";
import Form from "../../components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuthContext } from "../../context/AuthContext";
const schema = z.object({
  firstName: z.string().min(3, { error: "please enter a first name" }),
  surName: z.string().min(3, { error: "please enter a surname" }),
  date: z.string().min(1, { error: "please enter a date" }),
  month: z.string().min(2, { error: "please enter a month" }),
  year: z.string().min(4).max(4, { error: "please enter a year" }),
  gender: z.string().min(4, { error: "please enter a gender" }),
  email: z.email({ error: "please enter a email" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
});

const Register = () => {
  const { setUserDetails } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      surName: "",
      date: "12",
      month: "Sep",
      year: "2025",
      gender: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });
  return (
    <>
      <div>
        <div className="flex justify-center flex-col items-center">
          <h2 className={`text-6xl font-bold text-blue-600`}>facebook</h2>
          <Form
            handleSubmit={handleSubmit}
            register={register}
            watch={watch}
            errors={errors}
            setUserDetails={setUserDetails}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
