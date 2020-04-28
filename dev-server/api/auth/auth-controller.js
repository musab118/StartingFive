import User from '../../model/user-model';
import { generateJWT } from '../../services/auth-service';

export function index(req, res) {
    // First verify that the user provided a username and a password
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

    // Find the user in the database and converts it to lowercase
    User.findOne({ username: req.body.username.toLowerCase() }, (error, user) => {
        if (error) {
            //returns a 500 status code Internal Server Error
            return res.status(500).json();
        }

        if (!user) {
            // returns a 401 status code which means Unauthorized Error
            return res.status(401).json();
        }

        const passwordsMatch = User.passwordMatches(req.body.password, user.password);
        if (!passwordsMatch) {
            // returns a 401 status code which means Unauthorized Error
            return res.status(401).json();
        }
        const token = generateJWT(user);
        // returns a 200 status code which means everything is ok
        return res.status(200).json({ token: token });
    });
}

