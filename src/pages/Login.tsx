import LoginCard from "../components/LoginCard";
import { Button } from "reactstrap";
const Login = () => {
  const handleGithubLogin = (e: any) => {};

  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>
            Seleccione Proveedor para <strong>Ingresar</strong>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Button outline onClick={handleGithubLogin}>
            <LoginCard />
          </Button>
          <Button onClick={handleGithubLogin}>
            <LoginCard />
          </Button>
          <Button onClick={handleGithubLogin}>
            <LoginCard />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
