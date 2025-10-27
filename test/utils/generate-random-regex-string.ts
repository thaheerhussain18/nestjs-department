/**
 * Generates a random string that may or may not match a given regex.
 */
export function generateRandomRegexString({
  regex,
  minLength = 3,
  maxLength = 20,
  isValid = true,
}: {
  regex: RegExp;
  minLength?: number;
  maxLength?: number;
  isValid?: boolean;
}): string {
  const validChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 _-.'()&@+/\\";
  const invalidChars = "!#$%^*={}[]<>?|`~\";:,";
  const getRandomChar = (set: string) =>
    set.charAt(Math.floor(Math.random() * set.length));

  const randomLength =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  let result = "";

  if (isValid) {
    // ✅ Generate a string that matches the regex
    do {
      result = "";
      // Ensure the first char is alphanumeric
      result += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

      for (let i = 1; i < randomLength; i++) {
        result += getRandomChar(validChars);
      }
    } while (!regex.test(result));
  } else {
    // ❌ Generate a string that does NOT match the regex
    const invalidType = Math.random();
    if (invalidType < 0.33) {
      // wrong characters
      for (let i = 0; i < randomLength; i++) {
        result += getRandomChar(invalidChars);
      }
    } else if (invalidType < 0.66) {
      // too short
      result = getRandomChar(validChars);
    } else {
      // too long
      const longLen = maxLength + Math.floor(Math.random() * 10 + 1);
      for (let i = 0; i < longLen; i++) {
        result += getRandomChar(validChars);
      }
    }

    // Make sure it actually fails the regex
    if (regex.test(result)) {
      return generateRandomRegexString({ regex, minLength, maxLength, isValid: false });
    }
  }

  return result;
}
