# A Not so Revolutionary Bug Tracker:
## Intro and Motivation:
- This project doesn't add anything to the world. It is a complete waste of humanity's time, but I need a job and I have nothing to show for it. I thought of populating my portfolio with a bunch of small half-bottomed "projects", but I came across this video by Bob Davis of *Code Foundery* and was intrigued by what he suggested:

[![The 1 coding project idea guaranteed to get you a Software Development job](https://img.youtube.com/vi/oC483DTjRXU/0.jpg)](https://www.youtube.com/watch?v=oC483DTjRXU)
- The video suggests a bug tracker as one of the most effective projects a beginner or intermediate developer can add to their portfolio. It is an application sophisticated enough to involve much of the skills a typical web developer, especially a so-called "full stack developer", must have. It involves a data storage and management mechanism (a SQL database or otherwise), a backend mechanism for processing data, requests and responses, a frontend for allowing the user to interact with the application. It also involves authentication and authorization, implementing some form of business logic, extensive testing coverage.. etc. 
- The video suggests the use of the .NET environment to power the application.I don't know anything about .NET and C#, but I will try to learn more about it as I progress through building the suggested application and might even use it. In case I fail to like .NET, I might use node or the Python Flask framework.
- I am starting with the frontend and will use react and Redux and probably graphQL. The first absolute step is to create a basic HTML mockup of the project's view and an initial mock json payload that simulates the data the view would be receiving from the server. The HTML mockup will be converted into a functional react view. Redux will be introduced as soon as react state management becomes annoying. If the react app is able to handle the simplified json payload, I will move to the back-end, start with a database and the models of the application.

## Week One, Basic Board Design:
- I should've written something here!

## Week Two, Ticket Design:
- I should've written something here!

## Styling Input Fields (March 7, 2020):
- I should've written something here!

## Text Fields Autocomplete Suggestions:
- At the moment, I'm having a hard time thinking of an implementation of autocomplete for some text fields such as the field for assigning a task to a user. I thought of using a trie (prefix tree) but found it might take too much time. I am still designing a mockup that needs to be translated into react components and still too far away from starting on the server side logic. 
- Currently, I am thinking of a regex solution and don't know if it will work.
- I managed to implement a simplistic autocomplete mechanism using regex. It was a no-brainer but it might be a memory hog. I also managed to make the text area styling buttons function and add pseudo-markdown symbols such as asterisks for bold and italic. These are far from perfect, but I will not spend too much time on making them perfect. I am still just doing a basic HTML mockup of the freaking frontend.

## A Primitive Markdown (March 15, 2020):
- Changing the style of my primitive markdown by selecting part of the text area or placing the cursor in the correct position after clicking a styling button proved challenging and time wasting. I am moving now to writing code to translate the input markdown into viewable HTML. I will definitely come back to styling the input. I don't even know if I really need a text area. Many websites seem to use mechanisms that don't depend on any input fields. It seems like they use a blinking pipe symbol `|` with a large font as the input cursor and the 'input' is translated immediately to the desired viewable HTML. Anyways, my immediate goal this week (ISA) is to parse the markdown and generate some HTML out of it if the coronavirus doesn't consume me. I am again thinking of resorting to a combination of regex and linear traversal of a string. These are obviously very inefficient, but I am just trying to get a working skeleton that I can improve on in the future.

## `<div contenteditable="true">`, a not so Primitive Simple Text Editor (March 17, 2020):
- I just came across this HTML5 div attribute `contenteditable`, which when set to true  allows you to edit HTML content without having to deal with the awkward limitations of a textarea or input field. This is amazing. It's now even possible to show formatting of the text live as the user types. There is no need for showing markdown symbols to the user, although these symbols can be still available. After all, the bug tracker is supposed to be used mainly by software makers.
- At this very moment, I am wondering what the next step is going to be. I am torn between the following:
	+ Rework the description section of the ticket modal and replace the textarea with a contenteditable div.
	+ Work on the general layout of the application and make it mobile friendly. As it stands, the app's layout is terrible and can't accommodate different screen sizes.
	+ Start converting the mockup into React components. This step, however, needs to have the previous step done correctly. The messed up layout is preventing me from moving to componentizing the mockup. React will also require a revision of Redux, webpack, probably Gulp and some testing library.

## Corona Rattles the World, and I am a little bored of CSS (March 20, 2020):
- This disease is wreaking havoc in the northern hemisphere and I'm starting to get paranoid.

## Webpack and Babel and all that Jazz (March 21, 2020):
- I spent yesterday watching a few videos on tools I will definitely need in this project as  I am using this project as a learning tool mainly. I got the hang of how gulp.js works and now will move to webpack and babel.

## An infinite rabbit hole (Some day in early April):
- I got bored of frontend wiring and configuration and thought I could take a break and go over the principles of how server side programming works irrespective of what frameworks and platforms offer. 

## Learning C# and Sick of Webpack Boilerplate (May 30, 2020):
- I haven't touched the project for more than 2 months. I started learning C# a little over a week ago. The similarities between C# are kinda annoying and make it hard to decide between what I should skip and what I should focus on. 
- I am sick of webpack and will just use *Create React App* to abstracts all those headaches away.
- Before I can start writing the backend I need to also learn something about the .NET environment and ASP.NET Core.
- The next thing to do will be setting the database. I was thinking of *SQL Server*, but I am not sure. I might just use *MySQL*.

## ASP.NET Core and Visual Studio (June 15, 2020):
- I remember trying to start a simple Java web application back in 2017. It was a really torturous process. I had to install tomcat and configure it to work with Eclipse and had to also go through so much voodoo to print a hello world. ASP.NET Core is totally different. You can do all that with a command or a click. I have to admit that I am not a big fan of the whole frameworks and dependency injection thing. I hate how they abstract so much away from the developer to the point where you sometimes have no idea what you're doing. For a couple of hours, I was trying to examine the project structure and understand what it was doing. I soon discovered I was working with a tutorial that might have not been updated in a while. I switched to another tutorial and things started to make sense gradually. I still feel the need to understand the different components of an ASP project and how they sing together, but I prefer learning while doing something and seeing the results. This framework works great with Microsoft's SQL server, but it can also work with MySQL or SQLite. I will stick to SQLite for now. 
- I worked with the database schema in the last few days. I am still confused about how to structure the database. Should data from different organizations that use the app be mixed in one database and in the same tables? I really have no idea. Can I start with the simple scenario where I am working with only one organization/team and then expand it later to handle different teams? I generally prefer starting with a simple prototype and then expand it later to handle more complex scenarios. The problem with this approach is that I will have to do a lot of rewriting in the future.
- Visual Studio is also AMAZING! The only thing that kinda pisses me off about it is that it doesn't have a built-in console, or maybe there is one and I have to dig it out. Everything else, though, is smooth and obvious. I am not finding myself having to do any learning. It just works and makes sense and most of the shortcuts I am familiar with already work. Its predictive capabilities are unmatched and the few new shortcuts I have to learn are intuitive and easy to remember.

## Scaffolding (June 20, 2020):
- One thing that annoyed me about the framework is the zealous enthusiasm about the so-called scaffolding. I'd rather know as much as possible about what's going on, but the official tutorials insist on scaffolding that knowledge away. I finally found a [tutorial](https://www.youtube.com/watch?v=fmvcAzHpsk8) that does minimal scaffolding. Now I can have a better understanding of some of the points hidden in the official tutorials. 
- I don't totally hate scaffolding, though!! It helps reduce the amount of typing and I have used it to generate a model for the database schema. The generated code still has some parts that don't make sense to me. Let me finish this tutorial first.

## Code First(June 23, 2020):
- The lockdown was supposed to be lifted (wholly or partially) 2 days ago, and I don't care! I am trying to focus on this application and get done with it as soon as possible.
- My original intent was to write the database first and generate models from it, but this practice doesn't seem very popular in the ASP community. I don't know much about the framework and in many ways it takes radical departures from practices used in other frameworks I'm familiar with and I Like more such as Express and Flask. The favored approach in this community is cringely labeled as *code first*. So you write your models and use something called *migrations* to generate your database tables from it. Most of the tutorials I came across use this approach, so I will follow the herd, not out of an appreciation of dogma, but as a newcomer to ASP, I have no choice but to work with standard practices to finish this project as fast as possible.
- My biggest problem so far is that I am not sure how relationships are translated to database tables. My `Account` model has a field that lists the tickets the owner of the account is working on. When I pull an account, does that also pull all the tickets? I've read something called *lazy loading*. Anyways, I am learning new things as I progress through the project and I don't have a problem changing the models code.
- The data modeling problems I am having now have to do directly with the Entity Framework, the equivalent of Hibernate in the Java world. I might have to set aside some time to learn the basics of the framework.

## Modeling and Entities (June 24, 2020):
- I always thought building a data model is fun and easy. Fun it is, but easy, not! What if you have two relationships between two entities? My tickets entity is linked to the accounts entity in two ways. An account has multiple tickets **assigned** to it. It also **reports** multiple tickets. The account has two navigation properties of type ticket. Should the ticket have two foreign keys referencing the same primary key in the account?! This won't work even when configured using the Fluent Api. To solve this problem I had to create a third entity called assignment that sits as a connector between the account and the tickets assigned to it. It has a one-to-one relationship with the ticket and a many-to-one relationship with the account. I feel like this is hacky. My ticket must have a field for the account which reported the bug (created the ticket) and a field for the account to which the ticket is assigned. Could it have been done by having a ticket navigation property on the account and then filtering that list to create the desired field maybe in the DTO or even the model itself? I have no idea!

## The Dark Side of Convenience over Configuration (June 26, 2020):
- I spent 6 hours or more of yesterday trying to solve a problem I encountered with URLs. I couldn't find anything to help me get through. Skimming over the documentation didn't help me find any examples similar to the problem I was having. This morning I came across a mention of ***model binding***. It basically purports that variables in a URL string match model properties. I tried it and it worked like magic.
- I am really frustrated by how so much is hidden from me as a user of the framework. Important facts are buried under heaps of Microsofty jargon so many details. This is generally how frameworks work. You trade clarity for convenience. At least I happy with the project's structure and how it's much easier to understand and follow than the Java projects that I attempted in the past.  probably just need to read more on how the framework handles routing and other issues.
- Others also claim that REST APIs are generally complicated and hard to route and that's why other specifications like GraphQL are used.

## The Bright Side of Convenience over Configuration (June 27, 2020):
- My reluctant use of the code first approach to handle the databases turned out to be a good decision. I found myself having to the change tables structures. It would've been a great mess if I went with the database-first approach. It was easy to quickly change the models and fix the broken references in mock repos and DTOs that were pointed to by Visual Studio. Then I had to delete the old migration and create a new one and update the database. This was just cool.
- The problem I grappled with in the last few hours had to do with loading related data. I have to do something about this as it can be a big performance hit. I want to load thumbnails of active tickets associated with a team or a user, but don't want to load all tickets and then filter them. Can I store the filtered result somewhere. An even worse problem was that I had references to parent models in child models, which gave some really bad results. For example, loading a team resulted in loading its accounts. These accounts loaded their parent team and all the data associated with  the team. It was just a mess. Basically I figured I should reference any parent models and instead keep just their team ID which can be used to load the associated team through a link or something.

## A Checklist (June 28, 2020):
- As the codebase gets bigger, the problems grow both individually and in the way they affect each other and the program in general. This is a quick list of things I feel I need to do before having a pseudo-finished backend. When all these are done, I might be able to move back to the frontend or maybe start working and learning on authentication/authorization and JWT:
- [x] Avoid 500 server errors with good and extensive annotations on the CREATE and UPDATE DTOs.
- [x] Work on loading related data.
- [x] Keep the use of DTOs, models and repositories uniform and simple.
- [x] Work on granular and correct response messages, e.g. When a resource doesn't exist the correct message should be returned to the client. 
- [x] Have uniform and intuitive URIs with a focus on best practices.
- [x] Have scripts to seed the database. Maybe some pre-baked JSON snippets. Postman tests!
- [x] Fix enums. I have to just create a helper method that map roles to strings
- [x] Fix ticket/assignment relationship.
- [x] Try to eliminate all repetitions where possible. Use composition rather than inheritance.
- [x] Database redesign
- [x] Minimize data to be entered by the user if it can be derived from the data you have already

- Patching a document is done with the following:
```json
[
    {
        "op": "replace",
        "path": "/summary",
        "value": "n"
    },
        {
        "op": "replace",
        "path": "/active",
        "value": false
    }
]
```
- There are 6 patching operations: Add, Remove, Replace, Copy, Move and Test.

## Analysis Paralysis (June 30, 2020):
- I am losing it! The URIs are a  showed it was a common problem. I tried several suggestions and none worked except for a comment by somebody that suggested the cause might be the dynamic parts in a URI. The more variables in a URI, the more likely the problem I was having surfaces. I experimented with the idea and it worked! I didn't do much for the rest of the day! I spent most of it thinking of what to do next and how it would take me to finish the whole application. I added a little task list to this document to reduce some of the analysis paralysis, but got stuck on what to start with.

## Postman Automated Testing? (June 02, 2020):
- A new month and some really impossible waves of heat and humidity. I am tired re-running Postman to test the code and it looks like I have to write some tests that can be run all together at once.

## Stuck with Ticket Assignments (July 03, 2020):
- "Such empty!""

## Stuck with Ticket Assignments (July 04, 2020):
- I chose to focus on Postman testing and go back to ticket assignments later. I have also added a "feature", namely sprints. Sprints should have been there from the beginning. This will further slow the process and It will take longer before I can start on the UI. 
- I finished the harder part of the creating the API "testing suite". With the click of a button, I can now test every request and its response and result. I need to clean and tweak these tests to help speed the development process. I need to finish the sprint and assignment parts of the application tomorrow or by Monday at most and start on the UI and authentication. 

## Bootstrap and Back to the Frontend (1:28 AM, July 12, 2020):
- I wasted a lot of time thinking about the frontent design. I totally ditched the UI I worked on in March and went full Bootstrap. The thought and time I spent on the orignal design can show. It looks much more refined than the generic bootstrappy look of the new one, but mine is unresponsive lacks symmetric alignment. CSS alone needs a lot of work and I don't have the time to make it look better. I need to finish the project before the end of July iA. The last couple days I spent relearning Bootstrap. I used it back in 2015 and 2016. Anyways, the process of implementing redesign was extremely easy but the bigger problem was with deciding what views to have. I've also made the rnew design much simpler and tried to resist all perfectionist desires.































