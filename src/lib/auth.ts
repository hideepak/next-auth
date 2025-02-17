import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("I am in authorize");
                const user = { id: "1", name: "John Doe", email: "john@example.com" };

                if (credentials?.username === "admin" && credentials?.password === "password") {
                    console.log("User authenticated");
                    return user; // ✅ User is correctly typed
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt", // ✅ Explicitly specifying JWT strategy
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user; // ✅ No more TS2322 error!
            }
            return token;
        },
        async session({ session, token }) {
            if (token.user) {
                session.user = token.user; // ✅ No more TS2322 error!
            }
            return session;
        },
    },
    secret: "secret",
};

export const { auth } = NextAuth(authOptions);
