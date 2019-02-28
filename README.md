# InMarket

## Setup

1.  Installer NVM: https://aur.archlinux.org/packages/nvm/
2.  Sett opp Node for NVM
```
nvm install node
nvm use node
```
3.  Installer Framework7 globalt
```
nvm exec npm install -g framework7-cli
```
4.  Klon repo
```
git clone https://github.com/askbk/inmarket-frontend.git
```
5.  Installer moduler
```
cd inmarket-frontend
nvm exec npm install
```
6.  (For dev) Skru av ServiceWorkers i nettleseren.

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/home/ask/inmarket-frontend",
  "type": [
    "cordova",
    "web",
    "pwa"
  ],
  "name": "InMarket",
  "pkg": "io.framework7.myapp",
  "platform": [
    "ios",
    "android"
  ],
  "framework": "react",
  "template": "single-view",
  "cssPreProcessor": false,
  "customColor": true,
  "color": "c08d42",
  "bundler": "webpack"
}
```

## NPM Scripts

* `nvm exec npm start` - run development server
* `nvm exec npm run build-prod` - build web app for production
* `nvm exec npm run build-cordova-prod` - build cordova's `www` folder from and build cordova app
## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 generate-assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 generate-assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)

* [Framework7 React Documentation](https://framework7.io/react/)
* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi


# Nyttige linker
## Dummy REST API for å teste frontend-kode
https://reqres.in/
## Standard for format på API
https://jsonapi.org/format/
