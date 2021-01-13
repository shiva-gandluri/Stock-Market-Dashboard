# Stock Market Dashboard





Stock Market Dashboard is a beautiful [Bootstrap 4](http://getbootstrap.com/) and [Angular](https://angular.io/) Admin Dashboard with a huge number of components built to fit together and look amazing. If you are looking for a tool to manage and visualize data about your business, this dashboard is the thing for you. It combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics.
Stock Market Dashboard comes packed with all plugins that you might need inside a project and documentation on how to get started. It is light and easy to use, and also very powerful.

Stock Market Dashboard features over 16 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. 

I've used the following plugins:
- [Perfect Scrollbar](http://utatti.github.io/perfect-scrollbar/) for the nice scrollbars for windows.
- [Ng Bootstrap](https://ng-bootstrap.github.io/#/home) for the wonderful components.
- [Chartjs](https://www.chartjs.org/) for the wonderful charts.

I've also leveraged the use of REST API calls to store the data in the backend and display the data dynamically onto the UI in the form of trends.  Along with this, the dashboad also displays the current stock prices of companies by extracting the data using web-scraping. These values get updated dynamically with new trends of the stock in the stock market. This servers the purpose as an excellent business tool to check both the internal trends of business and also external stock price details of a company. 

## Table of Contents

* [Versions](#versions)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)


## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://getbootstrap.com/docs/4.0/getting-started/download/)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7)



## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```ng serve```
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-angular
├── CHANGELOG.md
├── documentation
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.css
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.css
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin-layout
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   ├── admin-layout.component.scss
│   │   │   │   ├── admin-layout.component.spec.ts
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   ├── admin-layout.module.ts
│   │   │   │   └── admin-layout.routing.ts
│   │   │   └── auth-layout
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.scss
│   │   │       ├── auth-layout.component.spec.ts
│   │   │       ├── auth-layout.component.ts
│   │   │       ├── auth-layout.module.ts
│   │   │       └── auth-layout.routing.ts
│   │   └── pages
│   │       ├── dashboard
│   │       │   ├── dashboard.component.html
│   │       │   └── dashboard.component.ts
│   │       ├── icons
│   │       │   ├── icons.component.html
│   │       │   └── icons.component.ts
│   │       ├── map
│   │       │   ├── map.component.html
│   │       │   └── map.component.ts
│   │       ├── notifications
│   │       │   ├── notifications.component.html
│   │       │   └── notifications.component.ts
│   │       ├── rtl
│   │       │   ├── rtl.component.html
│   │       │   └── rtl.component.ts
│   │       ├── tables
│   │       │   ├── tables.component.html
│   │       │   └── tables.component.ts
│   │       ├── typography
│   │       │   ├── typography.component.html
│   │       │   └── typography.component.ts
│   │       └── user
│   │           ├── user.component.html
│   │           └── user.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── demo
│   │   ├── fonts
│   │   ├── img
│   │   └── scss
│   │       ├── black-dashboard
│   │       └── black-dashboard.scss
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```

