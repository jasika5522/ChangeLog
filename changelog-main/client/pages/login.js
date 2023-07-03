import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import { useGlobalAuthContext } from "/context/AuthContext";
const Login = () => {
  const router = useRouter();

  const {
    setUser,
    setCookie,
    getCookie,
    login,
    setShowLoginModal,
    verifyToken,
  } = useGlobalAuthContext();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("Test123@");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_SERVER_BASE_URL);
  }, []);

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const data = {
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
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/login`,
        data,
        config
      );
      console.log(res.data);
      await setCookie("access-token", `Bearer ${res.data.token}`, 7);
      // const res = await axios(config);
      setUser(res.data.user);
      router.push("/");
      verifyToken(getCookie("access-token"));
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
        <p className="text-3xl font-semibold">Log in</p>
        <div className="flex flex-col w-full gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-gray-100 outline-none focus:ring-2 ring-Primary rounded-standard/4"
          />
          <div>
            <div className="relative flex flex-col items-center justify-center w-full">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-100 outline-none focus:ring-2 ring-Primary rounded-standard/4"
              />
              <button className="absolute text-xl text-gray-500 right-2">
                <IoEye />
              </button>
            </div>
            <button className="mt-2 text-sm font-medium text-Primary">
              Forgot Password?
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <button
            onClick={loginHandler}
            disabled={isLoading}
            className="flex items-center justify-center w-full py-3 text-sm font-medium text-white uppercase bg-Blue rounded-standard/4"
          >
            {isLoading ? (
              <div
                className={`w-6 h-6 border-2 border-b-0 border-r-0 rounded-full animate-spin border-White`}
              />
            ) : (
              "Login to your Account"
            )}
          </button>
          <Link
            href="/signup"
            className="text-sm font-medium opacity-50 hover:underline"
          >
            Don&apos;t have an Account? Sign up instead
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
