# SEI Trivia

- [SEI Trivia](#Full-Stack-Project)
  - [Overview](#Overview)
    - [Permissions](#Permissions)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

## Overview

_**SEI Trivia** is a simple, yet rewarding trivia game targeted at the student of the various Software Enginnering Immersive student at General Assembly. The goal here is to give the students a powerful review code for whenever they have a spare 5-10 minutes to play a round._
### Permissions

None at this time.

<br>

## MVP


_The **SEI Trivia** MVP is to create the functionality of the trivia game with a limited amount of questions without the ability to edit content for the instructors._

<br>

### MVP Goals

- _User authentication_
- _Questions for at a minimum one category._
- _Working 10 question trivia game with correct, incorrect, win and lose screens._
<br>

### MVP Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Required for native._ |
|   React Native   | _Neccesarry for mobile development._ |
| React Navigation | _For user navigation throughout the application._ |
|     Ruby on Rails      | _To manage all back-end related activities. (Storing questions, user authentication, etc.)_ |

<br>

### MVP Client (Front End)

#### Wireframes

<a href="https://whimsical.com/7dcDvsfRjpNDjEb125MW6S"><img src="https://i.ibb.co/QDxPsMH/Trivia.png" alt="Trivia" border="0"></a>

#### Component Hierarchy


<img src="https://i.ibb.co/GcC8p1g/ERD-1.jpg" alt="ERD-1" border="0">

#### Component Breakdown

| Component          | State               | Description                                                                        |
|--------------------|---------------------|------------------------------------------------------------------------------------|
| App                | User                | Root of the entire application.                                                    |
| SignUp             | FormData            | Allows the user to add themselves to the user table.                               |
| SignIn             | FormData            | Allows user to access their account.                                               |
| UserHome           | none                | Dashboard or main menu for the user.                                               |
| CategorySelector   | Selected Categories | User picks categories for the questions.                                           |
| Game               | Questions           | Game pulls 10 random questions from categories selected and begins game.           |
| CorrectOrIncorrect | none                | Provides visual reward or encouragement to the user based on their answer choice.  |
| WinOrLose          | none                | Provides visual reward or encouragement to the user based on >80%<                 |


<br>

### MVP Server (Back End)
Com
#### ERD Model

<img src="https://i.ibb.co/Pgd8hrv/Untitled-Diagram-2.jpg" alt="Untitled-Diagram-2" border="0">

#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

|Controller|Operation|VERB  |Route        |
|----------|---------|------|-------------|
|User      |#view    |GET   |/user/:id    |
|User      |#create  |POST  |/user        |
|User      |#update  |PUT   |/user/:id    |
|User      |#delete  |DELETE|/user/:id    |
|Cohort    |#index   |GET   |/cohorts     |
|Cohort    |#view    |GET   |/cohorts/:id |
|Cohort    |#create  |POST  |/cohorts     |
|Cohort    |#update  |PUT   |/cohorts/:id |
|Cohort    |#delete  |DELETE|/cohorts/:id |
|Unit      |#index   |GET   |/units       |
|Unit      |#view    |GET   |/units/:id   |
|Unit      |#create  |POST  |/units       |
|Unit      |#update  |PUT   |/units/:id   |
|Unit      |#delete  |DELETE|/units/:id   |
|Category  |#index   |GET   |/category    |
|Category  |#view    |GET   |/category/:id|
|Category  |#create  |POST  |/category    |
|Category  |#update  |PUT   |/category/:id|
|Category  |#delete  |DELETE|/category/:id|
|Question  |#index   |GET   |/question    |
|Question  |#view    |GET   |/question/:id|
|Question  |#create  |POST  |/question    |
|Question  |#update  |PUT   |/question/:id|
|Question  |#delete  |DELETE|/question/:id|

<br>

***

## Planning

<br>

### Timeframes

| Task                      | Priority   | Estimated Time   | Actual Time |
|---------------------------|------------|------------------|-------------|
| Build Endpoints           | High       | 7 hrs            |             |
| Create seed data          | High       | 3 hrs            |             |
| Authentication            | High       | 7 hrs            |             |
| SignUp--frontEnd          | High       | 2.5 hrs          |             |
| SignIn--frontEnd          | High       | 2.5 hrs          |             |
| User Home                 | High       | 2 hr             |             |
| CategorySelector          | High       | 5 hr             |             |
| Game Logic                | High       | 5 hr             |             |
| Game Screens              | High       | 3 hrs            |             |
| User Settings             | Medium     | 3 hrs            |             |
|-------MVP COMPLETE--------|----HIGH----| -----36 hrs------|-------------|
| Instructor Home           | low        | 2 hr             |             |
| Instructor Managment Menu | low        | 3 hr             |             |
| Manage Categories         | low        | 3 hrs            |             |
| Manage Questions          | low        | 3 hrs            |             |
| Manage Cohorts            | low        | 3 hrs            |             |
| Access Panel              | low        | 3 hrs            |             |
|-------PMVP COMPLETE-------|----low-----|------17 hrs------|-------------|
|--------Total Time---------|------------| -----53 hrs----- |-------------|

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Scheduled

| Day      | Deliverables                                 |
|----------|----------------------------------------------|
| Mar 4th  | Prototyping                                  |
| Mar 5th  | Compile Pitch                                |
| Mar 6th  | Endpoints/Seed Data                          |
| Mar 7th  | Seed Data                                    |
| Mar 8th  | Auth                                         |
| Mar 9th  | SignUp&In/UserHome                           |
| Mar 10th | CategorySelector/Game Logic                  |
| Mar 11th | Game Screens and User Settings---MVP         |
| Mar 12th | Styling/Instructor Home and Managmement Menu |
| Mar 13th | Presentations                                |

<br>

***

## Post-MVP

-_Instructor Managment of cohorts, categories, and questions._
####Cohorts
- _Cohorts should be in flatlist. Swiping on cohort yields options to edit or delete._
- 	_Circle with Plus icon on bottom right to add a cohort._
- 	_The user should be prompted to enter their password if they chose the delete option._
-  _The user should be able to view a sub-flatlist with the members listed._
####Categories and Questions
- _Categories And Questions managment should be in a flatlist as well._
- 	_Categories would be similar to implementation of Cohorts._
-  _Tapping the add icon the user would see preconstructed choices as well as the option for custom entry._
- 	_Clicking on a category would lead to a nested sub-flatlist showing the Categories' Questions._

-_VS game mode for users to play with other users._

- _Create a game mode selection screen_
<br>

***

## Project Change Log



## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***