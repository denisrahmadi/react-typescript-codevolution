import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
              <Greet name="Denis Rahmadi" isLoggedIn={true}/>
              <Person fullName={personName}/>
              <PersonList fullName={personList} />
              <Status status="loading" />
              <Heading>Placeholder Text</Heading>
              <Oscar>
                  <Heading>Placeholder Text</Heading>
              </Oscar>
          </div>
      </>
  );
}

export default App
