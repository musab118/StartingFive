<template>
<!--Welcome Page/Main page -->
<div>
  <!--Text Element -->
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 class="display-4">Welcome to Starting Five!</h1>
  <p class="lead">The worlds first application that allows you to book training sessions with professional athletes</p>
</div>
<!--Two button layout  -->
  <div class="card-deck mb-3 text-center card-custom">
    <div class="card mb-4 shadow-sm custom-card">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal custom-text">Bookings</h4>
      </div>
      <div class="card-body">
        <p class="custom-text align-left">
          To get started with your reservation please make sure you are logged in click the button 
          below
        </p>
        <br>
        <br>
       <!--Routes you to the manage bookings page if logged in and the login page if not  -->
         <router-link class="btn btn-outline-primary" to="/bookings">
      Manage bookings
    </router-link>
    
      </div>
    </div>
   <div class="card mb-4 shadow-sm custom-card">
     <!--Athletes Route -->
      <div class="card-header">
        <h4 class="my-0 font-weight-normal custom-text">Athletes</h4>
      </div>
      <div class="card-body">
        <p class="custom-text align-left">
          We have a number of superstar athletes who have 
          dedicated there time into perfecting thier craft 
          and arenow available to provide state of the Art 
          one on one training sessions 
        </p>
       <!-- Routes to page in order to view athletes and the services they offer-->
        <router-link class="btn  btn-outline-primary" to="/info/athletes">
      View Athletes
    </router-link>
      </div>
    </div>
    
  </div>


</div>
</template>