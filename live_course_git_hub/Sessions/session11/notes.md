

#Making a hamburger menue 

This will be our final week of taught content. We're going to be using all the workflow and development techniques we have learnt so far. 



#Modifying an existing responsive menue 

One of the best ways to learn web development is to modify existing code. This week the entire session will therefore be practically focused. 

##Task 

1) [Download the starter project from here](https://github.com/joeappleton18/swd500/raw/master/live_course_git_hub/Sessions/session11/assets/responsive-navigation.zip)  
2) As you can see, although the menu works, it has been implemented using internal css and javaScript.   
3) Your job is to convert this single html page into a better structured project. You should as a minimum consider the following:

- Install jQuery using NPM
- Place the java script in an external file 
- Covert the CSS to SASS. 

	- Nest rules where you can:

	```
	nav {
		height: 40px;
		width: 100%;
		background: #262626;
		font-size: 11pt;
		position: fixed;
		top: 0;
	
	}
	
	nav ul {
		padding: 0;
		margin: 0;
		height: 40px;
	
	}
	
	```
	can become 
	
	```
	nav {
		height: 40px;
		width: 100%;
		background: #262626;
		font-size: 11pt;
		position: fixed;
		top: 0;
		
		ul {
		padding: 0;
		margin: 0;
		height: 40px;
		
		}
	
	}

	
	
	```
	
	- Use variables for all the colours 



##Resources 

[A good responsive menu tutorial](https://webdesign.tutsplus.com/articles/a-simple-responsive-mobile-first-navigation--webdesign-6074)
