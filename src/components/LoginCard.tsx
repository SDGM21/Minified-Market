import "../sass/LoginScreen.scss";

const LoginCard = ({
  imgSource,
  alt,
  dark,
}: {
  imgSource?: string;
  alt?: string;
  dark?: "dark";
}) => {
  return (
    <>
      <div className="container">
        <img
          className={`${dark}`}
          style={{ display: "block", width: "100%" }}
          src={"../../public/25231_adobe_express.svg"}
          alt={alt}
        />
      </div>
    </>
  );
};

export default LoginCard;
