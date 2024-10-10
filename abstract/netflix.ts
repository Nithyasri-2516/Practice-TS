abstract class Content {
    constructor(public title: string, public releaseYear: number) {}

    abstract play(): void; // Abstract method

    info() {
        console.log(`${this.title} (${this.releaseYear})`);
    }
}
class Movie extends Content {
    play() {
        console.log(`Playing movie: ${this.title}`);
    }
}

class TVShow extends Content {
    play() {
        console.log(`Playing TV show: ${this.title}`);
    }
}

class Documentary extends Content {
    play() {
        console.log(`Playing documentary: ${this.title}`);
    }
}

const movie = new Movie("Inception", 2010);
const tvShow = new TVShow("Breaking Bad", 2008);
const documentary = new Documentary("Planet Earth", 2006);

movie.info();         // Output: Inception (2010)
tvShow.info();       // Output: Breaking Bad (2008)
documentary.info();  // Output: Planet Earth (2006)

movie.play();        // Output: Playing movie: Inception
tvShow.play();      // Output: Playing TV show: Breaking Bad
documentary.play(); // Output: Playing documentary: Planet Earth

