![Sunbird-PDF-Player](https://github.com/rahulshukla/sunbird-pdf-v2-ng7/workflows/Sunbird-PDF-Player/badge.svg)

# SunbirdPdfPlayer

  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

  

## Common angular components for Sunbird PDF Player!

  

This library provides an embeddable PDF viewer component which internally usages Pdf Js.

  

### Getting Started

  

###### Step 1 : Clone the Project and install necessary dependencies of the Project by following steps:

  

npm install

  

###### Step 2 : Run ng build to build the library. [ For development you can skip this step and follow step 3]

    ng build

The build artifacts will be stored in the dist/pdf-player-v2.

### Using the Sunbird-PDF-Player for development

    ng serve [will deploy the pdf player demo app http://localhost:4000]

Directory Structure : 
 - pdf-player-v2. [ Sunbird PDF player library ]
 - pdfDemo. [ Sample integrated angular app with pdf player library ]

### Using the Sunbird-PDF-Player in your Project

For help getting started with a new Angular app, check out the Angular CLI.

For existing apps, follow these steps to begin using .
###### Step 1: Install the following packages

    npm install sunbird-pdf-player-v2. [WIP]

###### Step 2: Include the Sunbird assets in angular.json


    "assets": [
    "src/favicon.ico",
    "src/assets",
    {
    "glob": "**/*",
    "input": "node_modules/pdf-player-v2/node_modules/ngx-extended-pdf-viewer/assets/",
    "output": "/assets/"
    }
    ],

###### Step 3: Import the modules and components

Import the NgModule for each component you want to use:

  

    import { PdfPlayerV2Module } from 'pdf-player-v2';
    @NgModule({
    ...
    imports: [ PdfPlayerV2Module,
    CarouselModule.forRoot()],
    ...
    })
    export class TestAppModule { }

 
# How to use pdf player

In your component template add below placeholder 

    <sb-pdf-viewer [pdfConfig]="setPdfConfig" (sendMetadata)="pdfEventHandler($event)"></sb-pdf-viewer>

  
## Input for library

    setPdfConfig = {
    'src': URL of PDF,
    'showOpenFileButton': Boolean,
    'showPropertiesButton': Boolean,
    'textLayer':Boolean,
    'showHandToolButton':Boolean,
    'useBrowserLocale':Boolean,
    'showBookmarkButton':Boolean,
    'showBorders':'Boolean',
    'startFromPage':number,
    'contextMenuAllowed':Boolean,
    'showSidebarButton': Boolean,
    'showFindButton': Boolean,
    'showPagingButtons': Boolean,
    'showZoomButtons': Boolean,
    'showPresentationModeButton': Boolean,
    'showPrintButton': Boolean,
    'showDownloadButton': Boolean,
    'showSecondaryToolbarButton': Boolean,
    'showRotateButton': Boolean,
    'showScrollingButton': Boolean,
    'showSpreadButton': Boolean,
    }

  

## Output from library

    {
    "eventType": "HEARTBEAT | START | END | FAILED",
    "metaData": {
    "numberOfPagesVisited": number,
    "totalNumberOfPages": number,
    "currentPagePointer": number,
    "pageDuration": [
    {
    "page": number,
    "spentTime": time in millisecond
    },
    ........
    ],
    "sessionId": "",
    "userPlayBehavior": []
    }
    }
