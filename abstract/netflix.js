var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Content = /** @class */ (function () {
    function Content(title, releaseYear) {
        this.title = title;
        this.releaseYear = releaseYear;
    }
    Content.prototype.info = function () {
        console.log("".concat(this.title, " (").concat(this.releaseYear, ")"));
    };
    return Content;
}());
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Movie.prototype.play = function () {
        console.log("Playing movie: ".concat(this.title));
    };
    return Movie;
}(Content));
var TVShow = /** @class */ (function (_super) {
    __extends(TVShow, _super);
    function TVShow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TVShow.prototype.play = function () {
        console.log("Playing TV show: ".concat(this.title));
    };
    return TVShow;
}(Content));
var Documentary = /** @class */ (function (_super) {
    __extends(Documentary, _super);
    function Documentary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Documentary.prototype.play = function () {
        console.log("Playing documentary: ".concat(this.title));
    };
    return Documentary;
}(Content));
var movie = new Movie("Inception", 2010);
var tvShow = new TVShow("Breaking Bad", 2008);
var documentary = new Documentary("Planet Earth", 2006);
movie.info(); // Output: Inception (2010)
tvShow.info(); // Output: Breaking Bad (2008)
documentary.info(); // Output: Planet Earth (2006)
movie.play(); // Output: Playing movie: Inception
tvShow.play(); // Output: Playing TV show: Breaking Bad
documentary.play(); // Output: Playing documentary: Planet Earth
