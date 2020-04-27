// Importing the HTTP service JS file
import { http } from './HttpService'

// This function retrives all the bookings
export function getAllBookings() {
    return http().get('/booking');
}
// This function retrives bookings by ID
export function getBookingById(id) {
    return http().get(`/booking/${id}`);
}
// This function creates the booking 
export function createBooking(booking) {
    return http().post('/booking', booking);
}
// This function deletes a specific booking
export function deleteBooking(id) {
    return http().delete(`/booking/${id}`);
}
// Function to update a booking
export function updateBooking(booking) {
    return http().put('/booking', booking);
}