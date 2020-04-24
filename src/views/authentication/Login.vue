<template>
    <div>
        <!--<h1>Login</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form> -->
        <div class="sidenav">
         <div class="login-main-text">
            <h1>Login Page</h1>
           
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form  v-on:submit.prevent="onSubmit">
                  <div class="form-group">
                     <label>User Name</label>
                     <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" />
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                      <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" />
                  </div>
                  <button type="submit" class="btn btn-black">Login</button> <br>
                  <br>
                  <router-link  to="/register">
                  <a href="url" style="color:white;">Need an account? Click here to register</a>
                  </router-link>
               </form>
            </div>
         </div>
      </div>
    </div>
    
    
</template>

<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'login',
        data: function() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            onSubmit: async function() {
                const user = {
                    username: this.username,
                    password: this.password
                }
                await auth.login(user);
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>
