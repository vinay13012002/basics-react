import { useForm } from "react-hook-form";

export default function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const dataSubmit = (data) => {
  //     console.log(data);
  //   };
  //   const handleSubmit = () => {
  //     // e.preventDefault();
  //     console.log("submitted");
  //   };

  return (
    <div className="container mt-10">
      <form
        onSubmit={handleSubmit((dataSubmit, e) => {
          e.target.reset();
          console.log(dataSubmit);
        })}
        action=""
        className="flex flex-col gap-6"
      >
        <h2 className="text-green-800 text-xl">
          Student from ( form validation )
        </h2>
        <div className="form-input">
          <input
            type="text"
            placeholder="enter your first name "
            {...register("firstName", { required: true })}
          />
          {errors.firstName?.type === "required" && (
            <p className="text-red-700">First name is required</p>
          )}
        </div>
        <div className="form-input">
          <input
            type="text"
            placeholder="enter your last name "
            {...register("lastName", { required: true, maxLength: 20 })}
          />
          {errors.lastName?.type === "required" && (
            <p className="text-red-700">enter last name</p>
          )}
        </div>
        <div className="form-input flex gap-2 flex-col ">
          <p>Gender - </p>

          <div className="form-gender">
            <label htmlFor="male">male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              {...register("gender", { required: true })}
            />
          </div>

          <div className="form-gender">
            <label htmlFor="female">female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              {...register("gender", { required: true })}
            />
          </div>
          {errors.gender && errors.gender.type === "required" && (
            <p className="text-red-700">select gender</p>
          )}
        </div>

        <div className="form-select">
          <select
            id="selectcollege"
            name="selectcollege"
            {...register("colleges", { required: true })}
          >
            <option value="">Select college</option>
            <option value="VTU">VTU</option>
            <option value="VTU1">VTU1</option>
          </select>
          {errors.colleges && errors.colleges.type === "required" && (
            <p className="text-red-700">Please select a college.</p>
          )}
        </div>

        <div className="check-form flex flex-col gap-2">
          <p>you can select multiple subs</p>
          <div className="checkbox-from">
            <label htmlFor="kannada">kannada</label>
            <input
              type="checkbox"
              name="subjects"
              id="kannada"
              value="kannada"
              {...register("subjects", {
                required: true,
                // massege: "select atleast one",
              })}
            />
          </div>
          <div className="checkbox-from">
            <label htmlFor="english">english</label>
            <input
              type="checkbox"
              name="subjects"
              id="english"
              value="english"
              {...register("subjects", {
                required: true,
                // massege: "select atleast one",
              })}
            />
          </div>
          <div className="checkbox-from">
            <label htmlFor="maths">maths</label>
            <input
              type="checkbox"
              name="subjects"
              id="maths"
              value="maths"
              {...register("subjects", {
                required: true,
                // massege: "select atleast one",
              })}
            />
          </div>
        </div>
        {errors.subjects && errors.subjects.type === "required" && (
          <p className="text-red-500">select one</p>
        )}
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
