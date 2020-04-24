<template>
<!--
    <div>
        <h1>Register</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">First Name</label>
                <input v-model="first" type="text" class="form-control" id="first" placeholder="First Name" />
            </div>
            <div class="form-group">
                <label for="username">Last Name</label>
                <input v-model="last" type="text" class="form-control" id="last" placeholder="Last Name" />
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div> -->
    <div>
    <div class="sidenav">
         <div class="login-main-text">
            <h1>Register Page</h1>
           
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
              <form v-on:submit.prevent="onSubmit">
                  <div class="form-group">
                     <label>First Name</label>
                     <input v-model="first" type="text" class="form-control" id="first" placeholder="First Name" />
                  </div>
                  <div class="form-group">
                     <label>Last Name</label>
                      <input v-model="last" type="text" class="form-control" id="last" placeholder="Last Name" />
                  </div>
                   <div class="form-group">
                     <label>Create Username</label>
                      <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" />
                  </div>
                   <div class="form-group">
                     <label>Create Password</label>
                     <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" class="btn btn-black">Register</button> <br>
                  <br>
                  <a href="url" style="color:white;">Need an account? Click here to register</a>
               </form>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'register',
        data: function() {
            return {
                username: '',
                password: '',
                first: '',
                last: ''
            }
        },
        methods: {
            onSubmit: async function() {
                const user = {
                    username: this.username,
                    password: this.password,
                    first: this.first,
                    last: this.last
                }
                const registerPromise = auth.registerUser(user);
                const loginPromise = auth.login(user);
                await Promise.all([registerPromise, loginPromise]);
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>