/**
 * Generates a random nonce string.
 *
 * @returns {string} The generated nonce string.
 */
export const getNonce = () => {
  let text = '';

  // Possible characters for the nonce.
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Generate a random string.
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  // Return the generated string.
  return text;
};
