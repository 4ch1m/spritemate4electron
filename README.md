# spritemate4electron

> A simple "[Electron](https://electronjs.org)-wrapper" for [Esshahn](https://github.com/Esshahn)'s awesome
__[Spritemate](https://github.com/Esshahn/spritemate)__-webapp.

## But... why?
This will turn __Spritemate__ into a "real" desktop-app which can easily be used offline.

Other benefits are:
* automatically restores your previously used window position/size (which is especially useful when working with a multi-monitor setup)
* no trouble with ad-blockers, etc.
* runs independent from your default browser (dedicated "localStorage", "sessionStorage", etc.)

## Download pre-built binaries

Find executables for ...

* Linux
* Windows
* MacOSX
* etc. 
 
... in the __[RELEASES](https://github.com/4ch1m/spritemate4electron/releases)__-section.

## Build / Run it yourself

##### Clone
```
git clone https://github.com/4ch1m/spritemate4electron.git
```

##### Init
```
git submodule init
git submodule update
```

##### Install
```
npm install
```

##### Start
```
npm run start
```

##### Package
```
npm run package
```

(Check the `dist`-folder for distributable binaries.)

## Author

Original __[Spritemate](https://github.com/Esshahn/spritemate)__ app: [Esshahn](https://github.com/Esshahn)

Electron-Wrapper: [4ch1m](https://github.com/4ch1m)

## License

Please read the [license](license) file.
