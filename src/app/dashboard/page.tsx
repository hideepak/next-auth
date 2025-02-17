import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(authOptions); // ✅ Direct usage

    if (!session) {
        redirect("/login");
    }

    return <div>Welcome to Dashboard, {session.user?.name}!</div>;
}
