import "./index.css"

function LoginPage() {
    return <>

        <div className="row">

            <div className="col-8">
            
                <h4 class="mt-3">Product name here </h4>


            </div>



            <div className="col-2 align-middle">

                <div class="login-box">
                    <h2 class="text-center">Login</h2>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" id="username" class="form-control" placeholder="Enter your username"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter your password"/>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                    </form>
                </div>

            </div>







        </div>

    </>
}

export default LoginPage;