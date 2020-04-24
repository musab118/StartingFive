import { http } from './HttpService'

export function getAllBookings() {
    return http().get('/booking');
}

export function getBookingById(id) {
    return http().get(`/booking/${id}`);
}

export function createBooking(booking) {
    return http().post('/booking', booking);
}

export function deleteBooking(id) {
    return http().delete(`/booking/${id}`);
}

export function updateBooking(booking) {
    return http().put('/booking', booking);
}