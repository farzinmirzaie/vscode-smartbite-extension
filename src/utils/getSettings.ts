import * as vscode from 'vscode';
import * as packageJson from '../../package.json';

type TConfigs<T> = keyof T extends `${infer _}.${infer Tail}` ? Tail : never;

/**
 * Retrieves the settings for the extension from the VSCode settings.
 *
 * @returns The settings object.
 */
export const getSettings = () => {
  // Get the title and properties from the package.json configuration.
  const { title, properties } = packageJson.contributes.configuration;

  // Get the settings from the VSCode settings using the configuration title.
  const { get } = vscode.workspace.getConfiguration(title);

  // Create a new object with the settings from the VSCode settings.
  const settings = Object.keys(properties).reduce(
    (previous, key) => {
      // Remove the title from the key and set it as the new key.
      const newkey = key.replace(`${title}.`, '') as TConfigs<typeof properties>;

      // Set the new key and value in the previous object.
      previous[newkey] = get(newkey);

      // Return the previous object.
      return previous;
    },
    {} as {
      [K in TConfigs<typeof properties>]: string | undefined;
    },
  );

  // Return the settings object.
  return settings;
};
