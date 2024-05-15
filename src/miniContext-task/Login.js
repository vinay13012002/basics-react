import React, { useContext, useState } from "react";
// import Context from "./Context";

export default function Login() {
  const [Username, setUsername] = useState();
  const [passward, setpassward] = useState();

  const { Context, setcontextData } = useContext(Context);

  const handleSubmit = () => {
    setcontextData({ Username, passward });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={setUsername((e) => e.target.value)}
        />
        <input
          type="passward"
          placeholder="passward"
          onChange={setpassward((e) => e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
