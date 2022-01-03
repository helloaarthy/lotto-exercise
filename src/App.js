import Lottery from "./Lottery";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini daily" maxNum={10} numBalls={4} />
    </div>
  );
}
