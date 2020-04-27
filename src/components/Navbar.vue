<template>
    <header>
        <!--Main Navbar  -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
            <!--Routes to Home -->
            <router-link to="/" class="navbar-brand">
                Starting Five
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <!--Home Router button -->
                        <router-link to="/" class="nav-link" exact>
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <!--Routes to Athletes -->
                        <router-link to="/info/athletes" class="nav-link" exact>
                            Athletes 
                        </router-link>
                    </li>
                         <!--Routes to bookings ONLY IF LOGGED in this is using a  "v-if function to check the vuex state" -->
                    <li v-if="$store.state.isLoggedIn" class="nav-item">

                        <router-link to="/bookings" class="nav-link" exact>
                            Bookings
                        </router-link>
                    </li>
                    <!-- If user is not logged in these two will be shown. "v-if will check the state of the user if logged in"-->
                    <li v-if="!$store.state.isLoggedIn" class="nav-item">
                        <router-link to="/register" class="nav-link" exact>
                            Register
                        </router-link>
                    </li>
                    <li v-if="!$store.state.isLoggedIn" class="nav-item">
                        <router-link to="/login" class="nav-link" exact>
                            Login
                        </router-link>
                    </li>
                    <!--Only shows if the user is logged in. checks with the vuex state and runs the logout function to logout the user -->
                    <li v-if="$store.state.isLoggedIn" class="nav-item">
                        <a v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <!-- Welcome, "USER" shows the user logged in using vuex state management -->
                        <a class="nav-link" href="#">
                            Welcome, {{ this.$store.state.username ? this.$store.state.username : 'User' }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<!-- This is where the logout function is imported from. authentication is from the /services.AuthService files-->
<script>
    import * as auth from '../services/AuthService';

    export default {
        name: 'Navbar',
        //After user is logged out the router will take them to the home route
        methods: {
            logout: function() {
                auth.logout();
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>