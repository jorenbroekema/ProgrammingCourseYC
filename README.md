## How to run
Just open index.html in your browser.

If you want the WhatsApp data visualization to work properly, take the following steps:

Install dependencies
```sh
yarn
```

Download your whatsapp data
Put the .txt file in the whatsapp-data folder

From the root folder, convert it to .json data
```sh
node chat-to-obj.js whatsapp-data/[filename].txt
```
Make sure the fetch in main.js reflects the filename. By default it is set to fetch `whatsapp.json`

Run the simple web server
```sh
yarn start
```
