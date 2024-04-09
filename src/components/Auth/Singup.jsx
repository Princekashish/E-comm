import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";

function Singup() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
const navigate = useNavigate()
  const submit = async (e) => {
    e.preventDefault();
    if (value.username === "" || value.email === "" || value.password === "") {
      return toast.error("All field are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );

      const user = {
        name: value.username,
        email: value.email,
        password: value.password,
        role: value.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      const userdatas = collection(fireDB, "user");
      addDoc(userdatas, user);
      setValue({
        username: "",
        email: "",
        password: "",
      });
      toast.success("Signup Successfully");
      navigate('/login')
    } catch (error) {
      console.error(error);
      toast.error("signupfailed. Please try again.");
    }
  };
  return (
    <div className=" bg-[url('../Img/Sectionblog.png')]   bg-cover bg-center bg-no-repeat   min-h-screen w-full ">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-white">
                User name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  value={value.username}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  className="block w-full rounded-md outline-none px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={value.email}
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={value.password}
                  onChange={(e) =>
                    setValue((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={submit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Not a member?
            <Link to={"/login"} className="text-yellow-500  font-semibold ml-3">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Singup;
