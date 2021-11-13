import React from 'react';
import List from './components/list';

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
      <List text="" />
    </div>
  );
}

export default App;
