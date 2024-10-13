// Define the UserProfile interface
interface UserProfile {
    name: string;
    age?: number; // Optional
    email: string;
}

// Function Type for creating user profiles
type CreateProfileFunction = (profile: UserProfile) => string;

// Function to create a user profile
const createUserProfile: CreateProfileFunction = (profile) => {
    return `User Profile: ${profile.name}, Age: ${profile.age ?? "N/A"}, Email: ${profile.email}`;
};

// Function to create a user profile with an optional address
function createUserProfileWithAddress(profile: UserProfile, address?: string): string {
    return `User Profile: ${profile.name}, Age: ${profile.age ?? "N/A"}, Email: ${profile.email}, Address: ${address ?? "N/A"}`;
}

// Function to create a user profile with a default age
function createUserProfileWithDefaultAge(profile: UserProfile, defaultAge: number = 18): string {
    const age = profile.age !== undefined ? profile.age : defaultAge;
    return `User Profile: ${profile.name}, Age: ${age}, Email: ${profile.email}`;
}

// Function to add multiple emails to a user profile
function addEmailsToProfile(profile: UserProfile, ...emails: string[]): string {
    const allEmails = emails.join(", ");
    return `User Profile: ${profile.name}, Age: ${profile.age ?? "N/A"}, Emails: ${allEmails}`;
}

// Function overloading to update user information
function updateProfile(name: string, age: number): string;
function updateProfile(email: string): string;
function updateProfile(input: any, age?: number): string {
    if (typeof input === "string" && typeof age === "number") {
        return `Updated: Name - ${input}, Age - ${age}`;
    } else if (typeof input === "string") {
        return `Updated: Email - ${input}`;
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
