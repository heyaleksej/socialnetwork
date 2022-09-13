# React + Redux Social Network App Demo 

## What is this app and what is it for?
This project is a social network created as part of the ReactJS course - [the way of the samurai](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8).
In fact, this is the final project, demonstrating the possession of web development skills.


## Particular qualities

- The number of requests per hour is limited
- On the page, you can see the number of remaining requests for the current hour. Changing the profile avatar, status, profile, adding or deleting a friend is considered a request.
Runs the app in the development mode.
- This project represents exclusively the client part of the web application. As a server was chosen, offered by the author of the above course, which is freely available for people taking the course. The functionality of the application is largely approved by its server part. The proposed API does not support sending messages and adding posts.

## Specifications
 - App on class components
 - Redux state management 
 - Axios API
 - Redux-thunk
 - Login page used reduxForm basically, after upgrade to Formik
 - Custom pagination upgraded to Material UI

## Functionality overview

The example application is a social blogging site. It uses a custom API for all requests, including authentication. You can view a live demo over at https://heyaleksej.github.io/socialnetwork

**General functionality:**

- Authenticate user (login/signup pages + logout button on settings page)
- CRU* users (sign up & settings page - no deleting required)
- CRUD user status, update profile photo, and contact information
- GET and display paginated lists of users
- Follow/unfollow other users


**The general page breakdown looks like this:**

- Sign in/Sign up pages (URL: /#/login)
  ![Image alt](https://github.com/heyaleksej/socialnetwork/blob/2.0/src/common/img/signin.png?raw=true)
- Settings page
- Edit contact data
- Profile page (URL: /#/@profile )
  ![Image alt](https://github.com/heyaleksej/socialnetwork/blob/2.0/src/common/img/profile.png?raw=true)
- Posts with likes count
- ![Image alt](https://github.com/heyaleksej/socialnetwork/blob/master/src/common/img/posts.png?raw=true)
- DialogsPage (layout)
- ![Image alt](https://github.com/heyaleksej/socialnetwork/blob/master/src/common/img/mess.png?raw=true)
- Find users with pagination
- ![Image alt](https://github.com/heyaleksej/socialnetwork/blob/2.0/src/common/img/usersPagination.png?raw=true)

    


