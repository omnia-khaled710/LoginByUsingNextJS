export default function Parent() {
  const data = { name: 'omnia', age: 23 };
  return (
    <div>
      <h1>Welcome to the parent component</h1>
      <Child data={data} />
    </div>
  );
}

export function Child({ data }) {
  return (
    <div>
      <h2>Welcome to the child component</h2>
<p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}