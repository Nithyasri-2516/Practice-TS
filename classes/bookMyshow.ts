class Movie {
    public title: string;
    private _duration: number; // Duration in minutes
    constructor(title: string, duration: number) {
        this.title = title;
        this._duration = duration;
    }
    get duration(): number {
        return this._duration;
    }

    set duration(newDuration: number) {
        this._duration = Math.max(newDuration, 0); // Ensures duration is non-negative
    }
}
class Show {
    public movie: Movie;
    public availableSeats: number;

    constructor(movie: Movie, availableSeats: number) {
        this.movie = movie;
        this.availableSeats = availableSeats;
    }
    public bookTicket(seats: number): boolean {
        if (seats > 0 && seats <= this.availableSeats) {
            this.availableSeats -= seats;
            console.log(`Successfully booked ${seats} seats for ${this.movie.title}.`);
            return true;
        } else {
            console.error('Not enough available seats.');
            return false;
        }
    }
}
// Usage
const movie = new Movie('Inception', 148);
const show = new Show(movie, 10);

console.log(`Movie: ${movie.title}, Duration: ${movie.duration} minutes`);
show.bookTicket(3); // Output: Successfully booked 3 seats for Inception.
console.log(`Available seats: ${show.availableSeats}`); // Output: Available seats: 7

show.bookTicket(15); // Output: Successfully booked 7 seats for Inception.
console.log(`Available seats: ${show.availableSeats}`); // Output: Available seats: 0
