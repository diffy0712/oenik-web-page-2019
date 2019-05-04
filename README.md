## Writer's Home  

**Table Of Contents**  

[TOC]

## About the Project
This project is created for my Web Page Editing Subject at Obuda Univercity.
### Project Description
Writer's Home is intended to be a frontend design with content fetched as json from file( but later can be replaced with a good REST API for real dynamic content).

### Tools and resources
 - The choice of frontend framework is [vue.js](https://vuejs.org/).
 - For containerization I used [docker](https://www.docker.com/)
 - Based on [dribbble](https://dribbble.com) user [Tran Mau Tri Tam's](https://dribbble.com/tranmautritam) desgins.
   - [Landing Page](https://dribbble.com/shots/6146897-Mi-Travel-CTA-Free-Download/attachments)
   - [Blog Components](https://dribbble.com/shots/6106369-Mi-Travel-Blog-Style-2-Free-Download/attachments/1309975)
   - [Other Blog Components](https://dribbble.com/shots/6408939-Mass-Stories-Fashion-Sketch-Template)
   - [Other Other Blog Components](https://dribbble.com/shots/6066729-MI-Travel-Blog-Card/attachments/1302457)
 - [Optimizilla](https://imagecompressor.com/) to optimize images.
## Project setup with npm
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project setup with docker

First we need to build the.
```bash
$ sudo docker-compose build
```
then we can simply run our containers.
```bash
$ sudo docker-compose up
```
Now, we can access the project on http://localhost:2222 .

**NOTE:** No need for npm install since the dockerfile takes care of that too.

### Accessing container bash to use npm.
```bash
$ sudo docker exec -i -t oenik_webpage_2019_1_ep7d0o_ui_server bash
```
**NOTE:** This is not tested yet. might need to configure docker a bit if not working.
**NOTE:** You can still use local npm on the project since the whole folder is used by docker as volume to work with.
