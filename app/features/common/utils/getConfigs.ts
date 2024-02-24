/**
 * Retrieves the configuration settings for the extension.
 * If the global variable 'settings' is defined, it returns the value of 'settings'.
 * Otherwise, it means the React app is not running in the extension, so it returns the .env variables for development.
 *
 * @returns The configuration settings.
 */
export const getConfigs = (): typeof settings => {
  // Calling eval by another name causes evalled code to run in a
  // subscope of the global scope, rather than the local scope.
  const globalEval = eval;

  // Check if settings is defined in the global scope.
  try {
    globalEval('settings');

    // If settings is defined, return it.
    return settings;
  } catch (e) {
    // If settings is not defined, return .env variables.
    return {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    };
  }
};
