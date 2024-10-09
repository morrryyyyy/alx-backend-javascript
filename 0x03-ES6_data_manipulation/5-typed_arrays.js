export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified length (in bytes)
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view over the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the Int8Array
  return int8Array;
}
