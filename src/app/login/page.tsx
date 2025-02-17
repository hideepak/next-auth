"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = async () => {
        console.log("Login page");
        await signIn("credentials", {
            username: "admin",
            password: "password",
            redirect: false,
        });
        router.push("/dashboard");
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Sign in</button>
        </div>
    );
}
