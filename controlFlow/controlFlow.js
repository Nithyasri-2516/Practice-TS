// Function to demonstrate control flow statements
function controlFlowDemo(value) {
    // 1. if...else
    if (value < 10) {
        console.log("Value is less than 10");
    }
    else if (value === 10) {
        console.log("Value is equal to 10");
    }
    else {
        console.log("Value is greater than 10");
    }
    // 2. switch...case
    switch (value) {
        case 1:
            console.log("Value is 1");
            break;
        case 5:
            console.log("Value is 5");
            break;
        case 10:
            console.log("Value is 10");
            break;
        default:
            console.log("Value is something else");
            break;
    }
    // 3. for loop
    console.log("For loop:");
    for (var i = 0; i < value; i++) {
        console.log(i);
    }
    // 4. while loop
    console.log("While loop:");
    var count = 0;
    while (count < value) {
        console.log(count);
        count++;
    }
    // 5. do...while loop
    console.log("Do...while loop:");
    var doCount = 0;
    do {
        console.log(doCount);
        doCount++;
    } while (doCount < value);
    // 6. break example
    console.log("Break example:");
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            console.log("Breaking at i =", i);
            break; // Exit the loop when i is 5
        }
        console.log(i);
    }
    // 7. continue example
    console.log("Continue example:");
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue; // Skip even numbers
        }
        console.log(i);
    }
}
// Call the function with a sample value
controlFlowDemo(10);
