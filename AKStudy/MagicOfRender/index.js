function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
function Parent() {
  const [message, setShowMessage] = React.useState(false);
  return (
    <div>
      <h1>React render Magic </h1>
      <Counter />
      <button onClick={() => setShowMessage(!message)}>Show message</button>
      {message && <p>See the message</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Parent));
