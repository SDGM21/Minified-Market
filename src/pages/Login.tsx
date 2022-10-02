const Login = () => {

    return (
        <>
          <div className="container">
            <h3>Try Yourself ASShould</h3>
            <hr />
            <div className="row container">
              <form  className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <label htmlFor="icon_prefix">Email</label>
                    <input
                      id="icon_prefix"
                      name="email"
                      type="text"
                      className="validate"
                    />
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <label htmlFor="icon_password_prefix">Password</label>
                    <input
                      id="icon_password_prefix"
                      name="password"
                      type="password"
                      className="validate"
                    />
                  </div>
                </div>
    
                <button className="btn blue" type="submit">
                  Send
                </button>
                
              </form>
            </div>
          </div>
        </>
      );
}
 
export default Login;