const {app, BrowserWindow, nativeImage} = require('electron');
const store = new (require('electron-store'))();

let mainWindow;

function windowStateKeeper(windowName) {
    let window;

    // default values
    let windowState = {
        x: undefined,
        y: undefined,
        width: 1024,
        height: 768
    };

    function setBounds() {
        if (store.has(`windowState.${windowName}`)) {
            windowState = store.get(`windowState.${windowName}`);
        }
    }

    function saveState() {
        if (!windowState.isMaximized) {
            windowState = window.getBounds();
        }
        windowState.isMaximized = window.isMaximized();

        store.set(`windowState.${windowName}`, windowState);
    }

    function track(win) {
        window = win;

        ['resize', 'move', 'close'].forEach(event => {
            win.on(event, saveState);
        });
    }

    setBounds();

    return ({
        x: windowState.x,
        y: windowState.y,
        width: windowState.width,
        height: windowState.height,
        isMaximized: windowState.isMaximized,
        track
    });
}

function createWindow() {
    const mainWindowStateKeeper = windowStateKeeper('main');

    mainWindow = new BrowserWindow({
        icon: nativeImage.createFromPath(__dirname + '/spritemate/dist/img/favicon/android-chrome-256x256.png'),
        x: mainWindowStateKeeper.x,
        y: mainWindowStateKeeper.y,
        width: mainWindowStateKeeper.width,
        height: mainWindowStateKeeper.height
    });
    mainWindow.loadFile('spritemate/dist/index.html');
    mainWindow.setMenu(null);
    mainWindow.on('closed', function () {
        mainWindow = null
    });

    mainWindowStateKeeper.track(mainWindow);
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
