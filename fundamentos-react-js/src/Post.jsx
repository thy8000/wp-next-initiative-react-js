export function Post(args) {
  return (
    <div>
      <strong>{args.author}</strong>
      <p>{args.content}</p>
    </div>
  );
}
