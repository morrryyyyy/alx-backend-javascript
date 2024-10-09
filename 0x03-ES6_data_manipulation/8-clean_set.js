export default function cleanSet(set, startString) {
  // Initialize an empty array to hold the substrings
  const result = [];

  // Check if startString is not empty
  if (startString && typeof startString === "string") {
    // Iterate through each value in the set
    for (const value of set) {
      // Check if the value starts with startString
      if (value.startsWith(startString)) {
        // Extract the substring that comes after startString
        const substring = value.slice(startString.length);

        // Append the substring to the result array
        result.push(substring);
      }
    }
  }

  // Join the result array into a single string separated by hyphens
  return result.join("-");
}
