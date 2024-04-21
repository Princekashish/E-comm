import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";


function Loginsign() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (value.email === "" || value.password === "") {
      return toast.error("All field are required");
    }

    try {
      const users = await signInWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );

      const q = query(
        collection(fireDB, "user"),
        where("uid", "==", users?.user?.uid)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let user;
        QuerySnapshot.forEach((doc) => {
          user = doc.data();
        });
        localStorage.setItem("users", JSON.stringify(user));
        setValue({
          email: "",
          password: "",
        });
        toast.success("Login sussessfull");
        navigate('/men')
      });
      return () => data();
      
    } catch (error) {
      console.log(error);
      toast.error("login failed");
    }
  };
  return (
    <div className="z bg-[url('../Img/Sectionblog.png')]   bg-cover bg-center bg-no-repeat   h-screen w-full ">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submit} >
            <div>
              <label className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) =>
                    setValue({...value,email:e.target.value})
                  }
                  required
                  className="block w-full rounded-md outline-none px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) =>
                    setValue((prev) => ({ ...prev, password: e.target.value }))
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 outline-none px-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
               
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Not a member?
            <Link
              to={"/Signup"}
              className="text-yellow-500  font-semibold ml-3"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginsign;
