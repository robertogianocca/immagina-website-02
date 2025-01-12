export const renameCategory = (obj, oldKey, newKey) => {
  if (typeof obj !== "object" || obj === null) return false; // Base case for non-object

  // Check if the property exists at the current level
  if (obj.hasOwnProperty(oldKey)) {
    obj[newKey] = obj[oldKey]; // Rename the property
    delete obj[oldKey]; // Delete the old property
    return true; // Property found and renamed
  }

  // Recursively search deeper
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const found = renameCategory(obj[key], oldKey, newKey);
      if (found) return true; // Stop further searching if property is renamed
    }
  }

  return false; // Property not found
};
