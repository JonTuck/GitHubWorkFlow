#A More In-Depth Workflow 



#Coud 9 	
[Create a cloud 9 student account](https://c9.io/pricing)


#Installing Node




#Node Package Manager

Your installation of node will come bundled with a powerful package manager called **NPM (Node Package Manager)**


>> A package manager from the prospective of front end development      is a tool that automates the process of installing and managing third party libraries and tools.
	
Within a terminal/shell window you can run the following command to ensure NPM is installed


```
which npm

```

If all is good the path where `NPM` installed will be displayed e.g. 

```
/usr/local/bin/npm
```

##Using NPM in Your Project 

- If you recall using git, web projects are contained within single folders. Everything within a given folder including sub folders represent a single project. With that in mind I've created a folder called `npm`. In order to use `npm` in our project, from terminal we simply need to `cd` in the `npm` folder and run the following command:

```
npm init 

```

- You'll be asked several question, you can just keep pressing enter to accept the default value:

- You should now have a `package.json` file in your working directory. This file is a simple `json` formatted file that contains NPM configuration settings. 

**package.json**

```
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

##Installing Packages

- We can now install packages, using the terminal command `npm install --save <package name>`
-  For  instance let's say we want to install jQuery. We can simply run the following command:

```
npm install --save jquery
``` 

-  A `node_modules` folder has now been created in the project folder. This is where all your node packages will be stored.

![](assets/jquery_install.png)



##Using node packages in your project






#Gulp 

Gulp is simple a javaScript task running. It allows us to 