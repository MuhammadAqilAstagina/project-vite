import { useState } from "react";
import ReactDOM from "react-dom"; // tambahkan import untuk ReactDOM

function Header({ name }) {
  // return <h1> Belajar React Dengan {props.name} 😁</h1>;
  // Menggunakan Props Refactor, menggunakan destructuring, ternary operator
  return <h1> Belajar React Dengan {name ? name : "Gina"} 😁</h1>;
}

// komponen bersarang
function App() {
  const students = ["Rodin", "Odo", "Alif"];
  const value = 0;
  const [likes, setLikes] = useState(value);

  function handleClickPlus() {
    if (likes < 10) {
      setLikes(likes + 1);
    } else {
      setLikes("!Max"); // Menetapkan string ketika mencapai nilai maksimum
    }
  }

  function handleClickMin() {
    if (likes > 0 && likes !== "!Max") {
      setLikes(likes - 1);
    } else {
      alert("Like sudah minimum!");
    }
  }

  // Perbaiki reset function untuk bisa mereset likes
  function reset() {
    setLikes(value);
  }

  return (
    <div>
      <Header />
      <Header name="Asta" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <p>Tekan Tombol Like Sampai Max</p>
      <button onClick={handleClickPlus}>Like</button>
      <p>({likes})</p>
      <button onClick={handleClickMin}>Unlike</button>
      {/* Tambahkan onClick event untuk tombol reset */}
      {likes === "!Max" && <button onClick={reset}>Reset</button>}
    </div>
  );
}

export default App;
