# VSCode SmartBite Extension

VSCode extension for [SmartBite](https://trysmartbite.com/).

![screenshot](images/screenshot.png)

## Installation

To install the extension, download the `.vsix` file from the releases page and run the following command.

```bash
code --install-extension extension.vsix
```

## Usage

To use the extension open your VSCode settings and search for `smartbite` and set the `email` and `password`.

```json
{
  "smartbite.email": "your-email",
  "smartbite.password": "your-password"
}
```

## Development

Install dependencies first.

```bash
npm install
```

Then, run the following command to run the extension in development mode in the browser.

```bash
npm run browser
```

To test the extension in VSCode, open the project in VSCode and press `F5` to start debugging.

## Release

To release the extension, run the following command.

```bash
vsce package
```

This will create a `.vsix` file which can be uploaded to the marketplace.
