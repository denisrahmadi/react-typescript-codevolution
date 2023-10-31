import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="flex justify-center items-center min-h-screen">
              <div className="flex flex-col items-center">
                  <button className="bg-green-400 px-3 py-2 rounded flex justify-center" onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                  </button>
                  <p>
                      Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
              </div>
          </div>
      </>
  );
}

export default App
