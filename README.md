# PeaPod 
###### Streamlining The Informal Childcare Process


### Database Schema

## Introduction

PeaPod was born out of a need to reduce scheduling conflicts among informal caregivers and pool their limited resources to meet greater needs. By implementing a care-share service we can reduce the time demand on each caregiver. 

This site provides a way for infomal caregivers to network within their communities and establish two way care relationships. 

The site's backend is hosted on Heroku and the frontend with Surge. A link to the site can be found [Here](http://pea-pod2.surge.sh/)

## Features

### User Accounts

This site allows for the creation of user accounts as well as the ability to update fields once created. Passwords are hashed using Bcrypt and then stored, along with other user information, ina Postgres database.

### Pods

The pod is the central unit around the careshare service is based. 

Users can create a pod, add other members to their pod and update details about their pod.

### Care Appointments

Care appointments can only be created within the context of a pod and function as the way to schedule resources between caregivers. 

There are two types of care appointments, looking and asking. 

Members can post one of the two types of appointments to their pod and all other members will be able to see the appointment. 

Each appointment has a number of child slots, a location and a start and end time. Other pod members can either offer themselvs as the carer for the appointment or add their own child to one of the remaining child slots. 

### Peas

Childrens' needs are also accounted for by recording information about each child within the pod like age, likes and allergies to better inform a caregiver about the repsponsibilities required while caring for someone elses loved one.

## Testing

Testing is provided within each folder and the tests files end with the  `.test ` extension. 

To run the test suite type: `npm test`

## User Flow

The standard user flow for a caregiver looking for, or offering, care is as follows:

1) User reaches homepage and clicks on signup button.  
2) User fills out signup form and clicks register.
3) User is redirected to homepage where current pod. information is displayed. If there is no current pod, a link to the Pods page is displayed. 
4) User creates a pod and adds other members to it. 
5) User is prompted to go to childrens page to create their children's profiles
6) User creates an appointment in their pod and waits until another member fills it
7) User sees other members' appointments and fills a slot of theirs
8) (Future) User recieves google calendar invite to the appointment with the relevant information. 

## API

A custom API was built for this project to handle the creation and update of the user data models. 

This API was built using Express.js running on Node.js. More detailed information about the API can be found [Here](https://github.com/JamesBatho/peapod-backend)

The API connects to a postgres database with th schema found [here](https://dbdiagram.io/d/60a2c8cdb29a09603d1543cd)

or click this link: https://dbdiagram.io/d/60a2c8cdb29a09603d1543cd

## Technology Stack

### Frontend 

The frontend was created using React and styling was performed mainly with Bootstrap 

### Backend

The backend for this project uses Express.js and a Postgres databse hosted on Heroku. 

## Future Improvements

###Search by Location

Filtering users by location would allows caregivers to find their closest potential pod mates. 
