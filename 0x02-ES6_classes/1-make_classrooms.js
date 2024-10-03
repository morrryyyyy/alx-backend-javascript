// Import the ClassRoom class from 0-classroom.js
import ClassRoom from "./0-classroom.js";

// Define the initializeRooms function
export default function initializeRooms() {
  // Create three ClassRoom objects with the specified sizes
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Return an array containing the ClassRoom objects
  return [room1, room2, room3];
}
