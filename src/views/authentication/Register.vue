<template>
  <div>
    <div class="sidenav">
      <!--Register page form -->
      <div class="login-main-text">
        <h1>Register Page</h1>
      </div>
    </div>
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <!--Same thing as the login form. which submits all the data at the submit button -->
          <form v-on:submit.prevent="onSubmit">
            <!--first name element -->
            <div class="form-group">
              <label>First Name</label>
              <!--v-model binding to the initial function -->
              <input
                v-model="first"
                type="text"
                class="form-control"
                id="first"
                placeholder="First Name"
              />
            </div>
            <!--last name element -->
            <div class="form-group">
              <label>Last Name</label>
              <input
                v-model="last"
                type="text"
                class="form-control"
                id="last"
                placeholder="Last Name"
              />
            </div>
            <!--Username element -->
            <div class="form-group">
              <label>Create Username</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <!--Create password field -->
            <div class="form-group">
              <label>Create Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-black">Register</button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//same as the login imports the auth from Authservice in order to authenticate the user bieng registered
import * as auth from "../../services/AuthService";
// exportts a function named registers
export default {
  name: "register",
  data: function() {
    // returns the 4 variables to be used in the v-model elements and attaches them to the front end element
    return {
      username: "",
      password: "",
      first: "",
      last: ""
    };
  },
  // onSubmit method that pushed the info to the Database
  methods: {
    onSubmit: async function() {
      const user = {
        username: this.username,
        password: this.password,
        first: this.first,
        last: this.last
      };
      // registers the user from the auth compoinent and then pushes the user back to the honepage
      const registerPromise = auth.registerUser(user);
      const loginPromise = auth.login(user);
      await Promise.all([registerPromise, loginPromise]);
      this.$router.push({ name: "home" });
    }
  }
};
</script>