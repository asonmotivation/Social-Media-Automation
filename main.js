const { app, BrowserWindow } = require('electron');
const path = require('path');

const isHeadless = process.env.HEADLESS === 'true';

function createWindow() {
    // Create the browser window.
    const windowOptions = {
        width: 1300,
        height: 700,
        webPreferences: {
            contentSecurityPolicy: "script-src 'self'; object-src 'self';",
            nodeIntegration: true,
            contextIsolation: false
        },
    };

    if (isHeadless) {
        windowOptions.webPreferences.offscreen = true;
    }

    mainWindow = new BrowserWindow(windowOptions);

    // and load the index.html of the app.
    mainWindow.loadFile(__dirname + '/index.html');

    if (!isHeadless) {
        // Open the DevTools.
        mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// This method will be called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

app.commandLine.appendSwitch('disable-autofill');
