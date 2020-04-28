<template>
<!--Main bookings page basically a summary page-->
  <div class="d-flex flex-column">
    <h1>Bookings</h1>
<!--Router link to create a new booking -->
    <div class="mb-4">
      <router-link to="/bookings/new" class="btn btn-success ml-2" exact>Create Booking</router-link>
    </div>
<!--If there are more than 0 bookingd then return the following -->
    <div v-if="bookings && bookings.length > 0" class="d-flex flex-wrap justify-content-start">
      <div
        v-for="booking in bookings"
        v-bind:key="booking._id"
        class="card mb-2 ml-2 text-white bg-dark"
        style="width: 18rem;"
      >
      <!--The main card body which shows the booking information -->
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <!--Author or user who created the booking -->
            <h5 class="card-title">Created by: {{ booking.author.username }}</h5>
          </div>
          <!--Athlete that is on that booking -->

          <h6 class="card-subtitle mb-2 text-muted">Athlete: {{ booking.title }}</h6>
          <!--Location of the booking -->
          <p class="card-text2">Location: {{ booking.location }}</p>
          <div
            v-if="booking.author._id === $store.state.userId"
            class="d-flex justify-content-between"
          >
          <!--Button that linkts to the edit route in order to edit the booking -->
            <router-link
              type="button"
              tag="button"
              class="card-link btn btn-primary"
              :to="{ name: 'bookings-edit', params: { id: booking._id } }"
              exact
            >Edit</router-link>
            <!--Delete booking button -->
            <a
              v-on:click.prevent="currentBookingId = booking._id"
              class="card-link btn btn-danger"
              href="#"
              v-b-modal.modal1
            >Delete</a>
          </div>
        </div>
      </div>

      <div>
        <!--A modal appears that asks whether the user would like to delete the reservation -->
        <b-modal id="modal1" ref="modal" centered title="Delete Confirmation">
          <p class="my-4">Are you sure you would like to delete this Reservation?</p>
          <div slot="modal-footer" class="w-100 text-right">
            <b-btn slot="md" class="mr-1" variant="danger" @click="deleteBooking">Delete</b-btn>
            <b-btn slot="md" variant="secondary" @click="cancelModal">Cancel</b-btn>
          </div>
        </b-modal>
      </div>
    </div>
<!--Else return the following if there are no bookings -->
    <div v-if="bookings && bookings.length === 0" class="ml-2">
      <div class="alert alert-info">No Reservations found.</div>
    </div>
  </div>
</template>

<script>
// Imports the booking service in order to view the bookings
import * as bookingService from "../../services/BookingService";

export default {
  name: "bookings-all",
  data: function() {
    return {
      bookings: null,
      currentBookingId: null
    };
  },
  // calls the getAllBookings function 
  beforeRouteEnter(to, from, next) {
    bookingService.getAllBookings().then(res => {
      next(vm => {
        vm.bookings = res.data.bookings;
      });
    });
  },
  methods: {
    // method to cancel the modal popup
    cancelModal: function() {
      this.$refs.modal.hide();
      this.currentBookingId = null;
    },
    // the deletebooking function
    deleteBooking: async function() {
      this.$refs.modal.hide();
      await bookingService.deleteBooking(this.currentBookingId);
      const index = this.bookings.findIndex(
        booking => booking._id === this.currentBookingId
      );
      this.bookings.splice(index, 1);
      this.currentBookingId = null;
    }
  }
};
</script>