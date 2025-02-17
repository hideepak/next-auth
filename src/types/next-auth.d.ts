import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image?: string;

        };
        accessToken?: string; // ✅ Add Google Access Token to Session
        idToken?: string; // ✅ Add Google ID Token to Session
    }

    interface User {
        id: string;
        name: string;
        email: string;
        image?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            id: string;
            name: string;
            email: string;
            image?: string;
        };
        accessToken?: string; // ✅ Add Access Token
        idToken?: string; // ✅ Add ID Token
    }
}
