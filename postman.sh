#! bin/bash

# postman.sh

newman run postman/Nodejs-Postman.postman_collection.json --iteration-data postman/inputData.json --environment postman/Nodejs-Postman.postman_environment.json --globals postman/globals.postman_globals.json