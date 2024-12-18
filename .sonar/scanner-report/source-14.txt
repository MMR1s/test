import Card from "./content.jsx";
function Login(props) {
  return props.isloggedin ? (
    <>
      <h2>Welcome</h2>
      <Card name={props.name} />
    </>
  ) : (
    "Log in"
  );
}

export default Login;
