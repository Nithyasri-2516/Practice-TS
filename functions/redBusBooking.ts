class BusBooking {
    // Function to book a single ticket with overloading
    bookTicket(busId: number, passengerName: string): string;
    bookTicket(busId: number, passengerName: string, seatNumber: number): string;
    bookTicket(busId: number, passengerName: string, seatNumber?: number): string {
        if (seatNumber !== undefined) {
            return `Ticket booked for ${passengerName} on bus ${busId}, seat ${seatNumber}.`;
        }
        return `Ticket booked for ${passengerName} on bus ${busId}.`;
    }

    // Function to book multiple tickets using rest parameters
    bookMultipleTickets(busId: number, ...passengerNames: string[]): string[] {
        return passengerNames.map(name => this.bookTicket(busId, name));
    }

    // Function to book a ticket with optional seat selection
    bookTicketWithOptionalSeat(busId: number, passengerName: string, seatNumber?: number): string {
        return seatNumber 
            ? `Ticket booked for ${passengerName} on bus ${busId}, seat ${seatNumber}.`
            : `Ticket booked for ${passengerName} on bus ${busId}.`;
    }

    // Function to book a ticket with default seat
    bookTicketWithDefaultSeat(busId: number, passengerName: string, seatNumber: number = 1): string {
        return `Ticket booked for ${passengerName} on bus ${busId}, seat ${seatNumber}.`;
    }
    
}

// Usage
const bookingSystem = new BusBooking();

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
