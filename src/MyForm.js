import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Input from "./Input";
import InputArray from "./InputArray";

let renderCount = 0;

const defaultValues = {
  name: "Sujith",
  email: "sujithmsjs@gmail.com",
  username: "sujithmsjs",
  password: "Admin@1234",
  address: {
    city: "Yellandu",
    village: "24 Area"
  },
  mobile: ["8008188022", "9676068006"],
  skills: ["Java", "Phython", "React", "Angular"]
};

const MyForm = () => {
  const form = useForm({
    defaultValues
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.info(data);
  };
  renderCount++;
  return (
    <>
      <h6>Renders {renderCount / 2}</h6>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          errors={errors}
          label={"Email"}
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address"
            }
          })}
        />

        <Input
          errors={errors}
          label={"Name"}
          register={register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters long"
            },
            maxLength: {
              value: 50,
              message: "Name can't exceed 50 characters"
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Please enter a valid name"
            }
          })}
        />

        <Input
          errors={errors}
          label={"Username"}
          register={register("username", {
            required: "Username is required",
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message:
                "Username can only contain letters, numbers, and underscores"
            },
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long"
            },
            maxLength: {
              value: 20,
              message: "Username can't exceed 20 characters"
            }
          })}
        />

        <Input
          errors={errors}
          label={"Password"}
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            }
          })}
        />

        <Input
          errors={errors}
          label={"City"}
          register={register("address.city")}
          inputClassName="form-control bg-info text-white"
        />

        <Input
          errors={errors}
          label={"Village"}
          register={register("address.village")}
          inputClassName="form-control bg-info text-white"
        />

        <Input
          errors={errors}
          label={"Primary Mobile"}
          register={register("mobile.0")}
          inputClassName="form-control bg-info text-white"
        />

        <Input
          errors={errors}
          label={"Secoundary Mobile"}
          register={register("mobile.1")}
          inputClassName="form-control bg-info text-white"
        />

        <InputArray control={control} register={register} errors={errors} />

        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-primary" type="submit">
            Button
          </button>
        </div>
      </form>

      <DevTool control={control} />
    </>
  );
};

export default MyForm;
