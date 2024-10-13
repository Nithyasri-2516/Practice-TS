// Function to create a user profile
var createUserProfile = function (profile) {
    var _a;
    return "User Profile: ".concat(profile.name, ", Age: ").concat((_a = profile.age) !== null && _a !== void 0 ? _a : "N/A", ", Email: ").concat(profile.email);
};
// Function to create a user profile with an optional address
function createUserProfileWithAddress(profile, address) {
    var _a;
    return "User Profile: ".concat(profile.name, ", Age: ").concat((_a = profile.age) !== null && _a !== void 0 ? _a : "N/A", ", Email: ").concat(profile.email, ", Address: ").concat(address !== null && address !== void 0 ? address : "N/A");
}
// Function to create a user profile with a default age
function createUserProfileWithDefaultAge(profile, defaultAge) {
    if (defaultAge === void 0) { defaultAge = 18; }
    var age = profile.age !== undefined ? profile.age : defaultAge;
    return "User Profile: ".concat(profile.name, ", Age: ").concat(age, ", Email: ").concat(profile.email);
}
// Function to add multiple emails to a user profile
function addEmailsToProfile(profile) {
    var _a;
    var emails = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        emails[_i - 1] = arguments[_i];
    }
    var allEmails = emails.join(", ");
    return "User Profile: ".concat(profile.name, ", Age: ").concat((_a = profile.age) !== null && _a !== void 0 ? _a : "N/A", ", Emails: ").concat(allEmails);
}
function updateProfile(input, age) {
    if (typeof input === "string" && typeof age === "number") {
        return "Updated: Name - ".concat(input, ", Age - ").concat(age);
    }
    else if (typeof input === "string") {
        return "Updated: Email - ".concat(input);
    }
    return "Invalid input";
}
// Usage Examples
console.log(createUserProfile({ name: "Alice", email: "alice@example.com" }));
console.log(createUserProfileWithAddress({ name: "Bob", email: "bob@example.com" }, "123 Main St"));
console.log(createUserProfileWithDefaultAge({ name: "Charlie", email: "charlie@example.com" }));
console.log(addEmailsToProfile({ name: "Dana", age: 25, email: "dana@example.com" }, "dana1@example.com", "dana2@example.com"));
console.log(updateProfile("Eve", 30));
console.log(updateProfile("eve@example.com"));
