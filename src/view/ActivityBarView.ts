import * as vscode from 'vscode';
import * as packageJson from '../../package.json';
import { getNonce, getSettings, getUri } from '../utils';

export class ActivityBarView implements vscode.WebviewViewProvider {
  constructor(private readonly _context: vscode.ExtensionContext) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken,
  ) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._context.extensionUri],
    };

    // Set the webview's html content.
    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    // Use a nonce to whitelist which scripts can be run.
    const nonce = getNonce();
    // Get the URI to the bundled React app.
    const webviewUri = getUri(webview, this._context.extensionUri, ['out', 'app', 'bundle.js']);
    // Get the VSCode settings for the extension and expose them to the React app.
    const settings = JSON.stringify(getSettings());

    return /*html*/ `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'nonce-${nonce}';"> -->
          <title>${packageJson.displayName}</title>
        </head>

        <body>
          <div id="root"></div>
          <script>
            const vscode = acquireVsCodeApi();
            const settings = JSON.parse('${settings}');
          </script>
          <script type="module" nonce="${nonce}" src="${webviewUri}"></script>
          <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'none'; style-src ${webview.cspSource}; font-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
        </body>
      </html>
    `;
  }
}
