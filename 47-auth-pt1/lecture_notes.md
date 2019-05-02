- Separate apps for front-end and back-end so can't send a cookie across them
- Authenication (are you who you say) and Authorization (can you do what you want)

- Create a User in the console

- Add gems `bcrypt`, `jwt`

- Review `bcrypt`, including User creation, password digest and `user.authenticate(password)`

- Build a sign-in form
- Add route:  `post "/login", to: "auth#create"` to routes.rb

** Login.js **

- JWT Overview
    - Can't just use cookies anymore because of reasons (?)
    - Token contains three pieces of information:
        - Header: typically consists of two parts: the type of the token, which is JWT, and the hashing algorithm such as HMAC SHA256 or RSA.
        - Payload, which contains the claims
        - Signature - take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.  Ensures it wasn't tampered with

- Goal
    - Login form will send username & password to our backend
    - Backend will verify that the user is who they say they are
    - Backend will create and encode a token including user id
    - Backend will send the token back to the front end
    - On subsequent requests, the front-end will send the token containing user id to the backend,
    where it will be decoded and handled appropriately.

* Cors
```rb
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'

        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
```

- Build Login Form

```js
class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value

        fetch("http://localhost:3001/api/v1/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
        }).then(r => r.json())
          .then(console.log)
    }
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
            <label for="username">Username</label>
            <input type="text" name="username" />
            <label for="password">Password</label>
            <input type="password" name="password" />
            <input type="submit" />
        </form>
      );
    };
}
```

- Test with stubbed out create method on Auth controller

```rb
def create
  render json: {username: params[:username]}
end
```

- Then write the real thing:

```rb
def create
  user = User.find_by(username: params[:username])
  if user && user.authenticate(params[:password])
      token = encode_token({user_id: user.id})
      json = {token: token, success: true}
  else
      json = {errors: "Something is wrong", success: false}
  end
  render json: json
end
```

* Application Controller

```rb
    def encode_token(payload)
      # payload => { beef: 'steak' }
      JWT.encode(payload, get_secret)
      # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
    end

    def decoded_token(token)
      # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"

      JWT.decode(token, get_secret)[0]
      # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      # [0] gives us the payload { "beef"=>"steak" }
    end

    def get_secret
        return "secret_password"
    end
```

* Login.js

- Change final part of handleSubmit to call this.handleResponse, which is:

```js
    handleResponse = (json) => {
        if (json["success"]) {
            localStorage.setItem("token", json["token"])
            this.props.history.push("/paintings")

        } else {
            console.log("Error")
        }
    }

```

check `localStorage.getItem("token")`