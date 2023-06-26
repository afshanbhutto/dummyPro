import MyComponent from "./components/MyComponent";

export default function Home() {
  return (
    <div className="container-fluid mx-auto min-w-screen  text-center  w-screen bg-gray-400 min-h-screen ">
      <h1 className="text-2xl  font-semibold pt-10 traccking-[2px]">
        {" "}
        Welcome
      </h1>
      <MyComponent />
    </div>
  );
}
