import User from '../../model/user-model';
import Booking from '../../model/booking-model';
import moment from 'moment';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    // FIND ALL BOOKINGS
    Booking.find({}, (error, bookings) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ bookings: bookings });
    }).populate('author', 'username', 'user');
    // Populate will find the author that created the booking and add it to the booking (username only)
}

export function create(req, res) {
    const id = auth.getUserId(req);
    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        const booking = new Booking(req.body.booking);
        booking.author = user._id;
        booking.dueDate = moment(booking.dueDate);

        booking.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}

export function update(req, res) {
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }

        const booking = new Booking(req.body.booking);
        booking.author = user._id;
        booking.dueDate = moment(booking.dueDate); // Formats the due date to a proper date format
        Booking.findByIdAndUpdate({ _id: booking._id }, booking, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function remove(req, res) {
    const id = auth.getUserId(req);
    Booking.findOne({ _id: req.params.id }, (error, booking) => {
        if (error) {
            return res.status(500).json();
        }
        if (!booking) {
            return res.status(404).json();
        }
        if (booking.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s booking' });
        }
        Booking.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function show(req, res) {
    // GET BOOKINGS BY ID
    Booking.findOne({ _id: req.params.id }, (error, booking) => {
        if (error) {
            return res.status(500).json();
        }
        if (!booking) {
            return res.status(404).json();
        }
        return res.status(200).json({ booking: booking });
    });
}