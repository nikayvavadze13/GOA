
const names = ["Luka", "Nino", "Saba", "Mari", "Giorgi"];

function App() {
  return (
    <div className="p-6">
      {names.map((name, index) => (
        <h1 key={index} className="text-2xl mb-2">{name}</h1>
      ))}
    </div>
  );
}

export default App;
