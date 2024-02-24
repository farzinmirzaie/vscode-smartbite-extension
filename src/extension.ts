import * as vscode from 'vscode';
import { ActivityBarView } from './view/ActivityBarView';

export const activate = (context: vscode.ExtensionContext) => {
  // Register `ActivityBarView` as the webview provider to render the React app.
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('webview', new ActivityBarView(context)),
  );
};

export const deactivate = () => {};
