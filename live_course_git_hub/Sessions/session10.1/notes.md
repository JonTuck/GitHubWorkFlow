#Using jQuery in your project 

- [What is jQuery](#what-is-jquery)
- [Including jQuery into your project](#including-jquery-into-your-project)  
- [Using jQuery](#using-jquery)
- [Document ready function](#document-ready-function)
- [Assigning Event Listeners](#assigning-event-listners)
- [Accessing attributes](#accessing-attributes)



#What is jQuery 

[jQuery](https://jquery.com/) is a "write less, do more", JavaScript library.  It massively simplifies the process of doing thing like, adding event listeners and accessing dom elements easier. 

 
#Including jQuery into your project 

- In order to include jQuery into our project we need to download the library 
- While, it's possible to download it from a the jQuery website. We're going to use a package manager. 

##The node pacakage manager

- A package manager allows you to "Find, share, and reuse packages of code"
- [Node](https://nodejs.org/en/) a is a server side javaScript programming language
- Node comes with a powerful package manager called npm 
- If you're using cloud9 node is already installed. If however your working on your hope computer you can install visit the [Website](https://nodejs.org/en/) and download the executable install file. **Please check this weeks practical to find how how to include javaScript**


#Using jQuery 

- Once jQuery is download and included into our project we can take advantage of the library

- We access the jQuery by using the `$` symbol

#Document ready function 

- Recall previously that to run our javaScript code we had to include a [inline call](https://github.com/joeappleton18/swd500/blob/master/live_course_git_hub/Sessions/session10.0/notes.md#running-javascript) within our HTML. 

```
<body onLoad="run()">
```

- We don't need a specific a inline load event. We can instead use the `$(document).ready()` function. This function automatically runs when the page loads. We can pass it a function that will be invoked when the load event has occurred. 

```html
$(document).ready(function(){
   console.log('page has loaded');
});


```


#Assigning Event Listeners 

- jQuery simplifies assigning event listeners. 
- We can use it in a similar way as the native query selector 

**javaScript**

```html
$(document).ready(function(){

    $('#right_arrow').click(function(e){
 	   console.log('right arrow has been clicked')
 	}   
});
```
 
 **html**
 
 ```html
 <img id="right_arrow" src="img/right_arrow.jpg">
 
 ```
 
 
#Accessing attributes 

- Consider the below image element

```html
 <img id="main_image" class= "image_border" src="images/image_1.jpg">

```

- If we wanted to change the image, we need to update the `src` attribute

- jQuery makes updating attributes easy 

```html
 $('#main_image').attr('src', 'images/image_2.jpg'); 

```

 
 
 