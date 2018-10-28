const {app, BrowserWindow} = require('electron');
const windowStateKeeper = require('electron-window-state');

let mainWindow;

function createWindow() {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1024,
        defaultHeight: 768
    });

    mainWindow = new BrowserWindow({
        icon: __dirname + '/spritemate/dist/img/favicon/android-chrome-256x256.png',
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height
    });
    mainWindow.loadFile('spritemate/dist/index.html');
    mainWindow.setMenu(null);
    mainWindow.on('closed', function () {
        mainWindow = null
    });

    mainWindowState.manage(mainWindow);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});
