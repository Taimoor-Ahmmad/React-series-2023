import "./App.css";
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Happy birthday</h1>
      <Card nickname="Taimoor"/>
      <Card nickname="Timmy"/>
    </>
  );
}

export default App;
