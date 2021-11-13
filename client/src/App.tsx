import React from 'react';
import ListItem from './components/list-item';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
      <ListItem text="First Input Item" />
    </div>
  );
}

export default App;
