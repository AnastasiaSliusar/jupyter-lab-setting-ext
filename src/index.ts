import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the settings-custom extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'settings-custom:plugin',
  description: 'A JupyterLab extension for Settings',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension settings-custom is activated!');
  }
};

export default plugin;
