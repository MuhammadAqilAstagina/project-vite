import { useState } from "react";

function Header({ name }) {
  // return <h1> Belajar React Dengan {props.name} 😁</h1>;
  // Menggunakan Props Refactor, menggunakan destructuring, ternary operator
  return <h1> Belajar React Dengan {name ? name : "Gina"} 😁</h1>;
}

function App() {
  // komponen bersarang
  const students = ["Rodin", "Odo", "Alif"];
  const resetButton = document.getElementById("resetButton");
  const value = 0;
  const [likes, setLikes] = useState(value);

  function handleClickPlus() {
    if (likes < 10) {
      setLikes(likes + 1);
    }
    if (likes == 9) {
      setLikes("!Max");
    }
  }

  function handleClickMin() {
    if (likes > 0) {
      setLikes(likes - 1);
    }

    if (likes < 1) {
      alert("Like bang!");
    }
  }

  // buatlah ini agar bisa mereset likes
  function reset() {
    if (likes === "!Max") {
      setLikes(value);
    } else {
      return likes;
    }

    // Perbaiki ini agar ketika likes < 9 button tidak muncul dan jika == "!Max" akan muncul
  }
  if (likes <= 9) {
    resetButton.style.display = "none";
  } else if (likes == "!Max") {
    resetButton.style.display = "block";
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
      <button type="button" id="resetButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
