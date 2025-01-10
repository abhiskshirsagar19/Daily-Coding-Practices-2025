// Traditional React without transpiler
// function Counter() {
//   const [count, setCount] = React.useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("p", null, `Count : ${count}`),
//     React.createElement("button", { onClick: increment }, `Increment`)
//   );
// }
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(Counter));
