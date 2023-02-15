import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <div className="flex justify-center items-center mt-8">
        <Table />
      </div>
    </div>
  );
}
export default App;
