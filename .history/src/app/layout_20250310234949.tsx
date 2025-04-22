

// // import type { Metadata } from "next";
// import { AuthContextProvider } from "@/context/AuthContext";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./styles/globals.css";
// import "./styles/card.css";
// import "./styles/hero.css";
// import "./styles/style.css";
// import "./styles/tab.css";
// import "./styles/marquee.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });




// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//      <html lang="en" data-theme="winter">
//         <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <AuthContextProvider>
//           <div className="bg-blur-2">
//       {/* {children} */}
     
//           {children}

//           </div>
  
//         </AuthContextProvider>
//         {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} /> */}
//         </body>
//     </html>
//   )
// }