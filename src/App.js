import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MyForm from "./MyForm";

export default function App() {
  return (
    <>
      <div className=" py-3 m-0 text-center text-white bg-primary">
        <h1>Welcome</h1>
      </div>
      <div className="container p-3 my-4">
        <MyForm />
      </div>
    </>
  );
}
