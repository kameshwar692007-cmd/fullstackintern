async function performDelayedOperations() {
  try {
    console.log("Starting operations...");

    // Await the first promise
    const result1 = await delay(10000, "First step done.");
    console.log(result1);

    // Await the second promise
    const result2 = await delay(5000, "Second step done.");
    console.log(result2);

    // Example of awaiting a rejected promise
    // const failedResult = await delay(-1000, "This will fail");
    // console.log(failedResult); // This line will not be reached if delay rejects

    console.log("All operations completed successfully!");
    return "Success"; // This value will be wrapped in a resolved Promise
  } catch (error) {
    console.error("An error occurred during operations:", error.message);
    throw error; // Re-throw the error to be caught by the caller
  }
}

function delay(ms, message) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Delay must be non-negative"));
      return;
    }
    setTimeout(() => resolve(message), ms);
  });
}

performDelayedOperations().catch((error) => {
  console.error("Unhandled error:", error);
});
