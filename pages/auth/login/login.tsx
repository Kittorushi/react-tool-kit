import Login from "components/Auth/Login";

export default function login() {
  return (
    <>
      {/* <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img src="/Images/Login.png" className="img-fluid" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <Login />
            </div>
          </div>
        </div>
      </div> */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img src="/Images/Login.png" className="img-fluid" alt="Login" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <Login />
            </div>
          </div>
        </div>
      </div>
      {/* <div classNameName="card horizontal z-depth-5">
                <div
                    classNameName="card-image hide-on-small-only"
                    style={{
                        display: "flex",
                        background: "#f2e7de",
                        alignItems: "flex-end"
                    }}>
                    <img
                        src="https://cdn.dribbble.com/users/1090020/screenshots/14127411/media/6927761ee5cd727f655a3f8f5e112ef0.png"
                        classNameName="img-fluid"
                        style={{}} alt="student"
                    />
                </div>
                <Login />
            </div> */}
    </>
  );
}
