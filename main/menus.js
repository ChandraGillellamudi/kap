const {app, Menu, shell, ipcMain, Notification} = require('electron');

const {openPrefsWindow} = require('./preferences');

// const {checkForUpdates} = require('./auto-updater');

const checkForUpdatesItem = {
  label: 'Check for Updates…',
  click(item) {
    item.enabled = false;
    // checkForUpdates(() => {
    //   // This will be called if no update is available
    //   (new Notification({
    //     title: 'No updates available!',
    //     body: 'You will automatically receive updates as soon as they are available 🤗'
    //   })).show();
    // });
  }
};

const cogMenu = [
  {
    role: 'about'
  },
  {
    type: 'separator'
  },
  {
    label: 'Preferences…',
    accelerator: 'Cmd+,',
    click() {
      openPrefsWindow();
    }
  },
  {
    type: 'separator'
  },
  checkForUpdatesItem,
  {
    type: 'separator'
  },
  {
    role: 'quit',
    accelerator: 'Cmd+Q'
  }
];

module.exports = {
  cogMenu: Menu.buildFromTemplate(cogMenu)
};
