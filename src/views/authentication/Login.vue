<template>
  <div>
    <div class="sidenav">
      <!--Login Element -->
      <div class="login-main-text">
        <h1>Login Page</h1>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <!-- Enter user name function. The v-on function makes this form respond the a function in order to submit the info-->
          <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label>User Name</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <!-- Password class group-->
            <div class="form-group">
              <label>Password</label>
              <!--v-model allows to bind the password element from the script tag -->
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <!-- Submit button as stated at the top form-->
            <button type="submit" class="btn btn-black">Login</button>
            <br />
            <br />
            <!--router link to the register components -->
            <router-link to="/register">
              <a href="url" style="color:white;">Need an account? Click here to register</a>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// imports the auth function from AuthService
import * as auth from "../../services/AuthService";
// this exports the function to username, password in order for it to be used in the v-model function
export default {
  name: "login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  // this is the onSubmit funcition in order to verify the info to mongoDB
  methods: {
    onSubmit: async function() {
      // screates a new variable for a user one password unit and one username 
      const user = {
        username: this.username,
        password: this.password
      };
      //Await function to makes sure that the login function has first ran and then takes the user to the home page
      await auth.login(user);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
