# Fitness Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
This application uses a Mongo database with a Mongoose schema and handles routes with Express.  
[https://secret-beach-04921.herokuapp.com/](https://secret-beach-04921.herokuapp.com/)

## Table of Contents 

* [User Story](#user-story)

* [Business Context](#business-context)

* [Functionality](#functionality)

* [Installation](#installation)

* [Usage](#usage)

* [Questions](#questions)

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Functionality

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.


## Installation
1. Clone the repository to your local computer

```bash
git clone https://github.com/s-cabrera/Fitness_Tracker.git
```

2. Install dependencies
```bash
npm install
```

3. Set up a Mongo database with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_content=controlaterms&utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&gclid=CjwKCAjwy7CKBhBMEiwA0Eb7aunO0eoHlak6jpPH6XZVEdZGCgStSlhJ2TvVG5Zhqn6roECPOSX4ZhoCeGIQAvD_BwE)

4. Deploy with [Heroku](https://id.heroku.com/login)

## Usage
Assuming that your connection works, seed your database.
```bash
npm run seed
```

If you're running locally, enter the following command to start your application:
```bash
npm start
```


## License
MIT 

## Questions
If you have any questions about the application, open an issue or contact me directly at stephanie.cabrera.333@gmail.com. You can find more of my work at my [Github](https://github.com/s-cabrera/). 

<a href="mailto:stephanie.cabrera.333@gmail.com?"><img src="paper-plane-solid.svg" style="fill: white" width="30" height="30"/></a>
<a href="https://www.linkedin.com/in/stephanie-cabrera-809999139/"><img src="linkedin-brands.svg" width="30" height="30"/></a>
<a href="https://github.com/s-cabrera/"><img src="github-brands.svg" width="30" height="30"/></a>
<a href="https://s-cabrera.github.io/Portfolio/"><img src="clipboard-list-solid.svg" width="30" height="30"/></a>
