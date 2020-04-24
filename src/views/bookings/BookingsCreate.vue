<template>
  <div>
    <h1>Create Booking</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">

      <div class="form-group">
        <h3>Athletes</h3>
        <!--Input field for radio buttons to choose the athlete for the booking-->

        <input
          v-model="booking.title"
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="Steph Curry"
        />
        <label class="form-check-label" for="exampleRadios2">Steph Curry - $400 per session</label>
        <br />
        <input
          v-model="booking.title"
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="Kahwi Leonard"
        />
        <label class="form-check-label" for="exampleRadios2">Kahwi Leonard - $400 per session</label>
        <br />
        <input
          v-model="booking.title"
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="Nikola Jokic"
        />
        <label class="form-check-label" for="exampleRadios2">Nikola Jokic - $250 per session</label>
        <br />
        <input
          v-model="booking.title"
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="Joel Embid"
        />
        <label class="form-check-label" for="exampleRadios2">Joel Embiid - $300 per session</label>
        <br />
        <input
          v-model="booking.title"
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="LeBron James"
        />
        <label class="form-check-label" for="exampleRadios2">Lebron James - $700 per session</label>
        <br />
        <input
          v-model="booking.title"
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="Rudy Gobert"
        />
        <label class="form-check-label" for="exampleRadios2">Rudy Gobert - $250 per session</label>
      </div>



      <div class="form-group">
        <h3>Location</h3>
        <!-- This is the input group for my radio buttons that allow a user to select the location of thier booking-->

        <input
          v-model="booking.location"
          class="form-check-input"
          type="radio"
          name="location"
          id="exampleRadios2"
          value="Houston,TX"
        />
        <label class="form-check-label" for="exampleRadios2">Houston,TX</label>
        <br />
        <input
          v-model="booking.location"
          class="form-check-input"
          type="radio"
          name="location"
          id="exampleRadios2"
          value="Los Angeles,CA"
        />
        <label class="form-check-label" for="exampleRadios2">Los Angeles,CA</label>
        <br />
        <input
          v-model="booking.location"
          class="form-check-input"
          type="radio"
          name="location"
          id="exampleRadios2"
          value="New York,NY"
        />
        <label class="form-check-label" for="exampleRadios2">New York,NY</label>
        <br />
        <input
          v-model="booking.location"
          class="form-check-input"
          type="radio"
          name="location"
          id="exampleRadios2"
          value="Chicago,IL"
        />
        <label class="form-check-label" for="exampleRadios2">Chicago,IL</label>
        <br />
        <input
          v-model="booking.location"
          class="form-check-input"
          type="radio"
          name="location"
          id="exampleRadios2"
          value="Philadelphia,PA"
        />
        <label class="form-check-label" for="exampleRadios2">Philadelphia,PA</label>
      </div>
<!--This is the data field that allows users to select a date. in chrome and most browsers this is shown as a date picker -->
      <div class="form-group">
        <label for="due-date">Date</label>
        <input
          name="due-date"
          v-model="booking.date"
          type="date"
          class="form-control"
          id="due-date"
          placeholder="Date in ##/##/## format"
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Create</button>
      </div>
    </form>
  </div>
</template>

<!--Script tag is where all the functions will be happening -->
<script>
// Importing the service that allows the writing to the database in MongoDD
import * as bookingService from "../../services/BookingService";
// This exports the function so that it can be used by the v-bind commands within the input variables
export default {
  name: "bookings-create",
  data: function() {
    return {
      booking: {
        title: "",
        location: "",
        date: ""
      }
    };
  },
  // the onSubmit method allows a function that writes the data obtained from the input fields and then pushes
  // them to the database.
  methods: {
    onSubmit: async function() {
      const request = {
        booking: this.booking
      };
      await bookingService.createBooking(request);
      this.$router.push({ name: "bookings-all" });
    }
  }
};
</script>