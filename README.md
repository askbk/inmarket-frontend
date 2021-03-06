# InMarket

## Setup

1.  Installer Framework7
```
npm install -g framework7-cli
```
2.  Klon repo
```
git clone https://github.com/askbk/inmarket-frontend.git
```
3.  Installer moduler
```
cd inmarket-frontend
npm install
```

# Git-konvensjoner

branches:
- master: oppdateres kun ved deployment
- dev: utviklings-branchen, oppdateres jenvlig
- feat/feature-name: en branch som lager/forbedrer en feature (skal branches fra dev) 
- design/area-name: en branch som inneholder re-design av allerede eksisterende elementer (skal branches fra dev)
- fix/bug-name: en branch som fikser en bug i dev (skal branches fra dev)

Pull request:
- Minst to utviklere må se gjennom en pull request
- Det skal alltid pushes til dev (aldri direkte til master)

## NPM Scripts

* `npm start` - run development server
* `npm run build-prod` - build web app for production
* `npm run build-cordova-prod` - build cordova app

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

# Nyttige linker
## Dummy REST API for å teste frontend-kode
https://reqres.in/
