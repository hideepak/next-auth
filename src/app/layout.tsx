
import SessionProvider from "./components/SessionProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <html lang="en">
            <body>{children}</body>
            </html>
        </SessionProvider>
    );
}

