(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{406:function(n,a,e){"use strict";e.r(a),a.default='<h2 class="page-title" tabindex="0">PWA Recipes 📱🥘</h2>\n<h3 class="page-description" tabindex="0">Take a look at demos to some of the most common PWA advanced use-cases 👇👇</h3>\n\n<a class="page-card-link" href="/push-examples/">\n    <paper-icon-button hidden class="available-offline-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>\n    <paper-card heading="Push Notifications" tabIndex="-1">\n    <img src="./img/push-examples.png" alt="Message bubble emoji"/>\n    </paper-card>\n</a>  \n\n<a class="page-card-link" href="/cart-abandon-notification/">\n    <paper-icon-button hidden class="available-offline-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>\n    <paper-card heading="Cart Abandonment Notification" tabIndex="-1">\n    <img src="./img/cart-abandon.png" alt="Shopping cart emoji"/>            \n    </paper-card>\n</a>\n\n<paper-card \n    class="install-pwa-card"\n    heading="Browse even when you\'re on the train 🚆📴" \n    tabIndex="0"\n    hidden\n>\n    <custom-style>\n    <style is="custom-style">\n        paper-card.install-pwa-card {\n            --paper-card-header-color: #ffffff;\n            background-color: var(--primary-color);\n            transition: transform 0.35s ease-in, box-shadow 0.35s ease-out;\n            \n        }\n        main paper-card.install-pwa-card:hover,\n        main paper-card.install-pwa-card:focus {\n            outline: none;\n            box-shadow: var(--paper-material-elevation-5_-_box-shadow);\n        }\n        paper-card.install-pwa-card paper-icon-button {\n        --iron-icon-fill-color: var(--google-blue-300);\n            position: absolute;\n            right: 0;\n            top: 0;\n            width: 35px;\n            height: 35px;\n        }\n        paper-card.install-pwa-card .card-actions {\n            margin-left: auto;\n            padding-bottom: 12px;\n        }\n        paper-card.install-pwa-card paper-button {\n            color: #ffffff;\n        }\n        paper-card.install-pwa-card .install-pwa-button {\n            background-color: var(--accent-color);\n        }\n        paper-card.install-pwa-card .install-pwa-button > iron-icon {\n            margin-left: 4px;\n        }\n    </style>\n    </custom-style>\n\n    \x3c!-- * Learn more - Reference --\x3e\n    <a \n        href="https://developers.google.com/web/fundamentals/app-install-banners/promoting-install-mobile"\n        tabindex="-1" \n        target="_blank"\n        rel="noopener noreferrer"\n    >\n    <paper-icon-button icon="open-in-new"></paper-icon-button>\n    </a>\n\n    <div class="card-actions horizontal justified">\n    <paper-button class="install-pwa-dismiss-button focus-outline">Not now</paper-button>\n    <paper-button class="install-pwa-button focus-outline" aria-label="Add PWA.recipes in your home screen">Install <iron-icon icon="get-app"></iron-icon></paper-button>\n    </div>\n</paper-card>\n\n<a class="page-card-link" href="/offline-requests/">\n    <paper-icon-button hidden class="available-offline-icon" tabIndex="-1" icon="offline-pin"></paper-icon-button>\n    <paper-card heading="Handle offline requests" tabIndex="-1">\n    <img src="./img/offline-requests.png" alt="Mobile off network emoji"/>            \n    </paper-card>\n</a>'}}]);