/**
 * Generates a random description string based on character length.
 * @param minLength - Minimum number of characters.
 * @param maxLength - Maximum number of characters.
 * @returns A random sentence-like description within the length range.
 */
export function generateRandomDescription(
  minLength ,
  maxLength 
): string {
  const words = [
    'Candy', 'Manufacturing', 'Department', 'Operations', 'Team', 'Production',
    'Quality', 'Control', 'Research', 'Development', 'Marketing', 'Engineering',
    'Logistics', 'Packaging', 'Innovation', 'Strategy', 'Support', 'Customer',
    'Service', 'Process', 'Improvement', 'Automation', 'Efficiency', 'Safety',
    'Management', 'Testing', 'Training', 'Coordination', 'Factory', 'Supply',
    'Chain', 'Equipment', 'Product', 'Design', 'Distribution'
  ];

  let result = '';

  // Keep building random text until within the character limit
  while (result.length < minLength) {
    const nextWord = words[Math.floor(Math.random() * words.length)];
    result += (result.length ? ' ' : '') + nextWord;

    // Prevent overshooting too far
    if (result.length >= maxLength) {
      result = result.slice(0, maxLength);
      break;
    }
  }

  // Add punctuation for realism
  if (!result.endsWith('.')) result += '.';

  // Capitalize the first letter
  return result.charAt(0).toUpperCase() + result.slice(1);
}
