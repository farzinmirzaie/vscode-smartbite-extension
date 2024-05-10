import * as vscode from 'vscode';
import { ActivityBarView } from './view/ActivityBarView';

export const activate = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    // Register `ActivityBarView` as the webview provider to render the React app.
    vscode.window.registerWebviewViewProvider('webview', new ActivityBarView(context)),

    // Register a command to open the browser to the order page.
    vscode.commands.registerCommand('smartbite.activityBarView.newOrder', () =>
      vscode.env.openExternal(vscode.Uri.parse('https://canteen.trysmartbite.com/restaurants')),
    ),
  );
};

export const deactivate = () => {};
