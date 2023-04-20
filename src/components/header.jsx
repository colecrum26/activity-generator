import FilterBtn from "./filterbtn";

function Header(props) {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1>Bored?</h1>
      <h3>Click the button to get started.</h3>
      <FilterBtn />
      </div>
  );
}

export default Header;
