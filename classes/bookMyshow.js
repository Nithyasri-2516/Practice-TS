var Movie = /** @class */ (function () {
    function Movie(title, duration) {
        this.title = title;
        this._duration = duration;
    }
    Object.defineProperty(Movie.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (newDuration) {
            this._duration = Math.max(newDuration, 0); // Ensures duration is non-negative
        },
        enumerable: false,
        configurable: true
    });
    return Movie;
}());
var Show = /** @class */ (function () {
    function Show(movie, availableSeats) {
        this.movie = movie;
        this.availableSeats = availableSeats;
    }
    Show.prototype.bookTicket = function (seats) {
        if (seats > 0 && seats <= this.availableSeats) {
            this.availableSeats -= seats;
            console.log("Successfully booked ".concat(seats, " seats for ").concat(this.movie.title, "."));
            return true;
        }
        else {
            console.error('Not enough available seats.');
            return false;
        }
    };
    return Show;
}());
// Usage
var movie = new Movie('Inception', 148);
var show = new Show(movie, 10);
console.log("Movie: ".concat(movie.title, ", Duration: ").concat(movie.duration, " minutes"));
show.bookTicket(3); // Output: Successfully booked 3 seats for Inception.
console.log("Available seats: ".concat(show.availableSeats)); // Output: Available seats: 7
show.bookTicket(15); // Output: Successfully booked 7 seats for Inception.
console.log("Available seats: ".concat(show.availableSeats)); // Output: Available seats: 0
