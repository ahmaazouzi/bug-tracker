# A Not so Revolutionary Bug Tracker:
## Intro and Motivation:
- This project doesn't add anything to the world. It is a complete waste of humanity's time, but I need a job and I have nothing to show for it. I thought of populating my protfolio with a bunch of small half-bottomed "projects", but I came across this video by Bob Davis of *Code Foundery* and was intrigued by what he suggested:

[![The 1 coding project idea guaranteed to get you a Software Development job](https://img.youtube.com/vi/oC483DTjRXU/0.jpg)](https://www.youtube.com/watch?v=oC483DTjRXU)
- The video suggests a bug tracker as one of the most effective projects a beginner or an intermediate developer can add to her portfolio. It is an application sophisticated enough to involve much of skills a typical web developer, especially a so-called "full stack developer", must have. It involves a data storage and management mechanism (a SQL database or otherwise), a backend mechanism for processing data, requests and responses, a frontend for allowing the user to interact with the application. It also involves authentication and authorization, implementing some form of business logic, extensive testing coverage.. etc. 
- The video suggests the use of the .NET environment to power the application.I don't know anything about .NET and C#, but I will try to learn more about it as I progress through building the suggested application and might even use it. In case I fail to like .NET, I might use node or Python Flask framework.
- I am starting with the frontend and will use react and redux and probably graphQL. The first absolute step is to create a basic HTML mockup of the project's view and an initial mock json payload that simulates the data the view would be receiving from the server. The HTML mockup will be converted into a functional react view. Redux will be introduced as soon as react state management becomes annoying. If the react app is able to handle the simplified json payload, I will move to the back-end, start with a database and the models of the application.

## Week One, Basic Board Design:
## Week Two, Ticket Design:
## Styling Input Fields (March 7, 2020):
## Text Fields Autocomplete Suggestions:
- At the moment, I'm having a hard time thinking of an implementation of autocomplete for some text fields such as the field for assigning a task to a user. I thought of using a trie (prefix tree) but found it might take too much time. I am still designing a mockup that needs to be translated into react components and still too far away from starting on the server side logic. 
- Currently, I am thinking of a regex solution and don't if it will work.
- I managed to implement a simplistic autocomplete mechanism using regex. It was a no-brainer but it might be a memory hog. I also managed to make the text area styling buttons function and add pseudo-markdown symbols such as asterisks for bold and italic. These are far from perfect, but I will not spend too much time on making them perfect. I am still just doing a basic HTML mockup of the freaking front end.

## A Primitive Markdown (March 15, 2020):
- Changing the style of my primitive markdown by selecting part of the text area or placing the cursor in the correct position after clicking a styling button proved challenging and time wasting. I am moving now to writing code to translate the input markdown into viewable HTML. I will definitely come back to styling the input. I don't even know if I really need a text area. Many websites seem to use mechanisms that don't depend on any input fields. It seems like they use a blinking pipe symbol `|` with a large font as the input cursor and the 'input' is translated immediately to the desired viewable HTML. Anyways, my immediate goal this week (ISA) is to parse the markdown and generate some HTML out of it if the coronavirus doesn't consume me. I am again thinking of resorting to a combination of regex and linear traversal of a string. These are obviously very inefficient, but I am just trying to get a working skeleton that I can improve on in the future.

## `<div contenteditable="true">`, a not so Primitive Simple Text Editor (March 17, 2020):
- I just came across this HTML5 div attribute `contenteditable`, which when set to true, it allows you to edit HTML content without having to deal with the awkward limitations of a textarea or input field. This amazing. It's now even possible to show formatting of the text live as the user types. There is no need for showing markdown symbols to the user, although these symbols can be still available. After all, the bug tracker is supposed to be used mainly by software makers.
- At this very moment, I am wondering what the next step is going to be. I am torn between the following:
	+ Rework the description section of the ticket modal and replace the textarea with a contenteditable div.
	+ Work on the general layout of application and make it mobile friendly. As it stands, the app layout is terrible and can't accommodate different screen sizes.
	+ Start converting the mockup into React components. This step, however, needs to have the previous step done correctly. The messed up layout is preventing me from moving to componentizing the mockup. React will also require a revision of Redux, webpack, probably Gulp and some testing library.

## Corona Rattles the World, and I am a little bored of CSS (March 20, 2020):
- This disease is wreaking havoc in the northern hemisphere and I started getting paranoid myself.

## Webpack and Babel and all that Jazz (March 21, 2020):
- I spent yesterday watching a few videos on tools I will definitely need in this project as  I am using this project as a learning tool mainly. I got the hang of how gulp.js and now will move to webpack and babel.

## An infinite rabbit hole:
- I got bored of frontend wiring and configuration and thought I could take a break and go over the principles of how server side programming works irrespective of what frameworks and platforms offer. 

## Learning C# and Sick of Weboack Boilerplate (May 30, 2020):
- I haven't touched the project for more than 2 months. I started learning C# a little over a week ago. The similarities between C# are kinda annoying and makes it hard to decide between what I should skip and what I should focus on. 
- I am sick of webpack and will just use *Create React App* to abstracts all those headaches away.
- Before I can start writing the backend I need to also learn something about the .NET environment and ASP.NET Core.
- The next thing to do will be setting the database. I was thinking of *SQL Server*, but I am not sure. I might just use *MySQL*.







