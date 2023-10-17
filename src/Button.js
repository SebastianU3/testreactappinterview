export function Button({ children, onHandle }) {
  return <button onClick={onHandle}>{children}</button>;
}
