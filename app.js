function Biodata() {
  return (
    <div>
      <h2>Name: Rakshana T</h2>
      <p>Age: 20</p>
      <p>Date of Birth: 2005</p>
      <p>Education: BE-Mechatronics</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Biodata/>);
