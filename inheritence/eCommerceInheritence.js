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
// Base class for all products
var Product = /** @class */ (function () {
    function Product(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    Product.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Price: $".concat(this.price));
        console.log("Description: ".concat(this.description));
    };
    return Product;
}());
// Subclass for Electronics
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, price, description, warranty) {
        var _this = _super.call(this, name, price, description) || this;
        _this.warranty = warranty;
        return _this;
    }
    Electronics.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Warranty: ".concat(this.warranty, " years"));
    };
    return Electronics;
}(Product));
// Subclass for Clothing
var Clothing = /** @class */ (function (_super) {
    __extends(Clothing, _super);
    function Clothing(name, price, description, size) {
        var _this = _super.call(this, name, price, description) || this;
        _this.size = size;
        return _this;
    }
    Clothing.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Size: ".concat(this.size));
    };
    return Clothing;
}(Product));
// Subclass for Groceries
var Grocery = /** @class */ (function (_super) {
    __extends(Grocery, _super);
    function Grocery(name, price, description, expiryDate) {
        var _this = _super.call(this, name, price, description) || this;
        _this.expiryDate = expiryDate;
        return _this;
    }
    Grocery.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Expiry Date: ".concat(this.expiryDate));
    };
    return Grocery;
}(Product));
// Usage
var laptop = new Electronics("Laptop", 999.99, "High-performance laptop", 2);
laptop.displayInfo();
var tShirt = new Clothing("T-Shirt", 19.99, "100% cotton t-shirt", "M");
tShirt.displayInfo();
var apple = new Grocery("Apple", 0.99, "Fresh apple", "2024-10-20");
apple.displayInfo();
