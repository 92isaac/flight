import Sidebar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <section
      className="w-full flex bg-[#F4FBF9] h-screen "
      >
        <Sidebar />
        <div className="p-6 w-full h-screen overflow-y-auto">
        {children}

        </div>
      </section>

  );
}
