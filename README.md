# maven-apps
Sample app using Intellij IDEA 15 as dev IDE.

## project structure
Maven modular app example. All modules are defined as springboot-XXX witch contains a sub pom file.

## how to startup project
execute 'mvn package' and this will compile the source codes and output a executable jar file..
also it will start a local server, visit at http://localhost:8081/greeting to test the result.

## springboot-web
a simple restful style web api backend service. prints back a json result

## springboot-mongodb
TBD

## gulp,compass,sass
[my js project](https://github.com/zhangqingfeng1984/test)

## mongodb replica setup
* md d:\mongo\db1
* md d:\mongo\db2
* mongod --dbpath d:\mongo\db1 --replSet "rs0" //startup mongodb instance1 at default port 27017
* mongod --dbpath d:\mongo\db2 --replSet "rs0" //startup mongodb instance2 at port 27018
* mongo //connect mongodb instace on 27017
* rs.initialize(); //init the replica on "rs0"
* make 27018 as master and 27017 as secondary `master will sync db data to it's clusters now`
* read data from cluster instance:
* db.setSlaveOK()
* db.mycollection.find()

## git commit projects to github
* install git bash
* ssh-keygen -c "xxx@xx.com"
* copy and past ./ssh/id_rsa.pub to github
* git remote add origin https://xxx/xxx/myrepo.git
* git pull origin master
* git push -u origin master // using local 'master' push to remote repo 
* using ssh protocal and public key and avoid input username/password
