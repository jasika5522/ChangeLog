import Link from "next/link";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { useGlobalAuthContext } from "/context/AuthContext";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  const { setUser, setCookie, login, setShowLoginModal, verifyToken } =
    useGlobalAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const signupHandler = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name: name,
        email: email,
        password: password,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/signup`,
        data,
        config
      );
      console.log(res.data);
      if (res.status == 403) {
        throw err;
      }
      // const res = await axios(config);
      await setCookie("access-token", `Bearer ${res.data.token}`, 7);
      await verifyToken(`Bearer ${res.data.token}`);
      router.push("/onboarding");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <p className="absolute font-bold left-6 top-6 ">LOGO</p>
      <div className="flex flex-col items-start justify-start w-full max-w-xs gap-8">
        <p className="text-3xl font-semibold">Sign up</p>
        <div className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-100 outline-none focus:border-Blue focus:ring-2 focus:ring-Blue rounded-standard/4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-gray-100 outline-none focus:border-Blue focus:ring-2 focus:ring-Blue rounded-standard/4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative flex flex-col items-center justify-center w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-100 outline-none focus:border-Blue focus:ring-2 focus:ring-Blue rounded-standard/4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="absolute text-xl text-gray-500 right-2">
              <IoEye />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <button
            onClick={signupHandler}
            disabled={isLoading}
            className="flex items-center justify-center w-full py-3 text-sm font-medium text-white uppercase bg-Blue rounded-standard/4"
          >
            {isLoading ? (
              <div
                className={`w-6 h-6 border-2 border-b-0 border-r-0 rounded-full animate-spin border-White`}
              />
            ) : (
              "Create Account"
            )}
          </button>
          <Link
            href="/login"
            className="text-sm font-medium opacity-50 hover:underline"
          >
            Don&apos;t have an Account? Sign up instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
