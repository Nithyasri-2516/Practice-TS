var BusBooking = /** @class */ (function () {
    function BusBooking() {
    }
    BusBooking.prototype.bookTicket = function (busId, passengerName, seatNumber) {
        if (seatNumber !== undefined) {
            return "Ticket booked for ".concat(passengerName, " on bus ").concat(busId, ", seat ").concat(seatNumber, ".");
        }
        return "Ticket booked for ".concat(passengerName, " on bus ").concat(busId, ".");
    };
    // Function to book multiple tickets using rest parameters
    BusBooking.prototype.bookMultipleTickets = function (busId) {
        var _this = this;
        var passengerNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            passengerNames[_i - 1] = arguments[_i];
        }
        return passengerNames.map(function (name) { return _this.bookTicket(busId, name); });
    };
    // Function to book a ticket with optional seat selection
    BusBooking.prototype.bookTicketWithOptionalSeat = function (busId, passengerName, seatNumber) {
        return seatNumber
            ? "Ticket booked for ".concat(passengerName, " on bus ").concat(busId, ", seat ").concat(seatNumber, ".")
            : "Ticket booked for ".concat(passengerName, " on bus ").concat(busId, ".");
    };
    // Function to book a ticket with default seat
    BusBooking.prototype.bookTicketWithDefaultSeat = function (busId, passengerName, seatNumber) {
        if (seatNumber === void 0) { seatNumber = 1; }
        return "Ticket booked for ".concat(passengerName, " on bus ").concat(busId, ", seat ").concat(seatNumber, ".");
    };
    return BusBooking;
}());
// Usage
var bookingSystem = new BusBooking();
// Booking single tickets
console.log(bookingSystem.bookTicket(101, "Alice"));
console.log(bookingSystem.bookTicket(102, "Bob", 5));
// Booking multiple tickets
console.log(bookingSystem.bookMultipleTickets(101, "Charlie", "David", "Eve"));
// Booking with optional seat
console.log(bookingSystem.bookTicketWithOptionalSeat(101, "Frank"));
console.log(bookingSystem.bookTicketWithOptionalSeat(101, "Grace", 12));
// Booking with default seat
console.log(bookingSystem.bookTicketWithDefaultSeat(103, "Hannah"));
console.log(bookingSystem.bookTicketWithDefaultSeat(104, "Ian", 10));
