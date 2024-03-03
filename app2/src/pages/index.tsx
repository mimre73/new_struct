import SideBar from "@/core/presentation/@shared/sidebar/side-bar";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <SideBar />
    </main>
  );
}
