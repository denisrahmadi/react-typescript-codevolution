import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Denis",
    last: "Rahmadi"
  } 

  const personList = [
    {
      first: "Roronoa",
      last: "Zoro"
    },
    {
      first: "Nico",
      last: "Robin"
    },
    {
      first: "Tony",
      last: "Chopper"
    }
  ]
  
  return (
      <>
          <div className="flex justify-center items-center min-h-screen flex-col">
              <Greet name="Denis Rahmadi" messageCount={10}/>
              <Person fullName={personName}/>
              <PersonList fullName={personList} />
          </div>
      </>
  );
}

export default App
