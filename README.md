# Nginx-with-Nodejs
When a user accesses nginx, it will make a call to our node.js application. This application will add a record to our mysql database, registering a name in the people table.

The return from the node.js application to nginx should be:
- screen text 'Full Cycle Rocks!'
- List of names registered in the database

<br/>

```
git clone https://github.com/marcelonespoli/Nginx-with-Nodejs.git

CD Nginx-with-Nodejs-main

docker-compose up -d --build

Open the browser and access http://localhost in the address bar.
Reload the page to add more names.

docker-compose down  (Stops containers and removes containers, networks, volumes, and images created)
```
