export default function Buttons({ name, onClick }) {
  return (
    <>
      <button
        style={{
          padding: "30px",
          fontSize: "30px",
          width: "100px",
          textAlign: "center",
          color: "whitesmoke",
          backgroundColor: "transparent",
        }}
        onClick={onClick}
      >{name}</button>
    </>
  );
}
