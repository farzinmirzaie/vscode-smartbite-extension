import * as vscode from 'vscode';

/**
 * Returns the URI of a resource for a webview.
 * @param webview - The webview instance.
 * @param extensionUri - The URI of the extension.
 * @param pathList - An array of path segments.
 *
 * @returns The webview URI of the resource.
 */
export const getUri = (webview: vscode.Webview, extensionUri: vscode.Uri, pathList: string[]) => {
  return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
};
