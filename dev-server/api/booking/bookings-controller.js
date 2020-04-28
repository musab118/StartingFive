import User from '../../model/user-model';
import Booking from '../../model/booking-model';
import moment from 'moment';
import * as auth from '../../services/auth-service';
// The status codes basically print to the console here in visual studio code in order to help my debug and see what it wrong if i 
// run into an error
export function index(req, res) {
    // finds all the bookings
    Booking.find({}, (error, bookings) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ bookings: bookings });
    }).populate('author', 'username', 'user');
    // populates the data by the author name
}
// exports the function in order to create the user 
export function create(req, res) {
    const id = auth.getUserId(req);
    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            //returns a 500 status code Internal Server Error
            return res.status(500).json();
        }
        const booking = new Booking(req.body.booking);
        booking.author = user._id;
        booking.dueDate = moment(booking.dueDate);

        booking.save(error => {
            if (error) {
                //returns a 500 status code Internal Server Error
                return res.status(500).json();
            }
            //returns a 201 status code OK
            return res.status(201).json();
        });
    });
}
// exporst the update function to request and respond to the server
export function update(req, res) {
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            //returns a 500 status code Internal Server Error
            return res.status(500).json();
        }
        if (!user) {
            //returns a 404 status code which means not found
            return res.status(404).json();
        }

        const booking = new Booking(req.body.booking);
        booking.author = user._id;
        booking.dueDate = moment(booking.dueDate); // Formats the due date to a proper date format
        Booking.findByIdAndUpdate({ _id: booking._id }, booking, error => {
            if (error) {
                //returns a 500 status code Internal Server Error
                return res.status(500).json();
            }
            //returns a 204 status code No Content success 
            return res.status(204).json();
        });
    });
}

export function remove(req, res) {
    const id = auth.getUserId(req);
    Booking.findOne({ _id: req.params.id }, (error, booking) => {
        if (error) {
            //returns a 500 status code Internal Server Error
            return res.status(500).json();
        }
        if (!booking) {
             //returns a 404 status code which means not found
            return res.status(404).json();
        }
        if (booking.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s booking' });
        }
        Booking.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                //returns a 500 status code Internal Server Error
                return res.status(500).json();
            }
            //returns a 204 status code No Content success
            return res.status(204).json();
        });
    });
}

export function show(req, res) {
    // gets the bookings by ID
    Booking.findOne({ _id: req.params.id }, (error, booking) => {
        if (error) {
            //returns a 500 status code Internal Server Error
            return res.status(500).json();
        }
        if (!booking) {
            //returns a 404 status code which means not found
            return res.status(404).json();
        }
        //returns a 200 status code OK
        return res.status(200).json({ booking: booking });
    });
}