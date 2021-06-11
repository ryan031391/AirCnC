# AirCnC
![alt text](https://github.com/ryan031391/AirCnC/blob/main/app/assets/images/android-chrome-192x192.png)

[AirCnC Live](https://aa-aircnc.herokuapp.com/#/)

### About:

AirCnC is a clone website of Airbnb, everyone can signup and login as a user, 
to search all the houses within a certain area by giving the location and boundary, 
and he can make a reservation to rent the house he want. 

What's more, if an user 
check out from a house then he can leave a comment and rate the house, so that people
from after can see the rating of this house.

### Tools Used:
* Ruby on rails for backend
* JavaScript for frontend
* ReactJS
* HTML framework
* CSS sytlesheet
* Google API
* Geocoding

### Features:
1. Searching by location. 
   
   The difficulty in this part is how to filter and pick out the data the user wants. I achieved this function by using the Google API, in which the input is converted into a (lag, lng) data, so that the frontend can take the filter as a data and send it to the backend alone with the ajax request.

2. Only the users have checked out in this house can leave a comment.

    This part gives me more troubles than I thought. The reason is the currentUser login with the session_token instead of its user_id, so I can not simply fetch the reservation informations when I fetch a house. The way I do is to filter the data and call the associations in the backend, and then I wrap all the data, includes the house information and reservation information associated with the house, in one json with a jbuilder, and send it back to frontend. So then the house can have all the infos it wants.
