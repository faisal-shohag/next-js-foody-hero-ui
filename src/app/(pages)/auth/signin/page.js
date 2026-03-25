// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { signInWithGithub } from "@/app/actions";
import { Card, CardHeader, Input, Button } from "@heroui/react";

const SignIn = () => {
  // const [email, setemail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError("");

  //   const res = await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //   });

  //   if (res?.error) {
  //     setError("Invalid email or password");
  //     setIsLoading(false);
  //   } else {
  //     router.push("/");
  //     router.refresh();
  //   }
  // };

  

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
      <Card className="w-full max-w-md p-4">
        <CardHeader className="flex  flex-col gap-1 items-center pb-0 text-center">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-sm text-default-500">
            Choose your providers
          </p>
           <Button onClick={signInWithGithub}>Sign In With Github</Button>
        </CardHeader>
        {/* <form onSubmit={handleSubmit}>
          <div className="gap-4 space-y-5">
            {error && (
              <div className="text-danger text-sm text-center bg-danger-50 p-2 rounded-medium">
                {error}
              </div>
            )}
            <div>
              <Input
                className={"w-full"}
                required
                placeholder="Enter your email"
                type="email"
                variant="primary"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <Input
                className={"w-full"}
                required
                placeholder="Enter your password"
                type="password"
                variant="primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              color="primary"
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </div>
        </form> */}
       
      </Card>
    </div>
  );
};

export default SignIn;
