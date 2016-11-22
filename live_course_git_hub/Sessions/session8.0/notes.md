##Workflow Improvement 

Workflow can be considered as the tools we use to make our lives as developers easier. This week we'll dip our toe in the water and set up SASS, which will aid your css workflow. 

##What Is Sass 

- Sass stands for Syntactically Awesome Style Sheet
- It extends the functionality of CSS
- It has a very low learning curve 
- Sass is what is know as a preprocessor, it takes a `scss` file and converts it into css. 

**A simple SCSS example**

```
$pink: #ea4c89;  /* this is a variable */
p {
 font-size: 12px;
 color: $pink;
}
```
**This would compile to**

```
$pink: #ea4c89;
p {
 font-size: 12px;
 color: #ea4c89;
```
}


##Using Sass

##Setting up a folder structure
 ![assets/scout_app.png](assets/scout_app.png)
 - The first thing we need to do is set up a folder structure that includes a `css` and a `.scss` file.
 - The `scss` file holds are sass which is compiled and outputted to our `css` file
 - We then include the css file into our html page
  
 
##Compiling Sass 

 - In order to use sass we need to compile a sass file (.scss) into css. This may seem somewhat intimidating at first, but it's really not too bad
 

###Scout App

![assets/scout_app.png](assets/scout_app.png)
  
 
 - The simplest way is to use [scout-app.io](http://scout-app.io), which can be downloaded for free

 - Scout will automatically convert sass into css for us



###Using Command Line SASS 

- If you're using [cloud9](http://www.cloud9.io), command line sass comes pre-installed 
- If you're working from a native ernviroment you'll need to visist the [sass website](http://sass-lang.com/install) and install it locally 
- From the terminal we then need to run the scout watch command with our input and output file

```bash  
 sass --watch scss/main.scss:css/main.css
``` 
 
##Some of the main features 

###Variables

 - Variables make working with css easier 
 - You can store, colours, fonts and other CSS values for reuse 
 - The **$** used to make a word a variable 

```
$font: arial, Helvetica, sans-serif;
$primary-color: #333;

body {
	font: $font-family;
	color: $primary-color;
	
}
```



###Nested rules 

- Sass let you nest rules in a hierarchy so it's clear that all the rules belong to the same family 


```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

####We can also nest pseudo classes, like this:

```
a {		color:$light_green; 
		font-weight:bold; 
		text-decoration:none;
 		&:hover{color:#505050; text-decoration:underline;}
  }

```

###Extensions 

- Using `@extends` allows you to easily share css properties from other selectors


```
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

```





##Resources 

[Team tree house, SASS for beginners](http://blog.teamtreehouse.com/the-absolute-beginners-guide-to-sass)

[CSS Truckm SASS style guide](https://css-tricks.com/sass-style-guide/
)
