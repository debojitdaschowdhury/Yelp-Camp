# Yelp Camp

Welcome to Yelp Camp, a full-stack web application where users can share and review campgrounds. This project is a part of Colt Steele's Courses

## Table of Contents

* Features
* Demo
* Installation
* Usage
* Technologies Used
* Contributing

## Features

* User Authentication: Users can sign up, log in, and log out.
* Authorization: Users can only edit or delete their own campgrounds and reviews.
* Campground CRUD: Users can create, view, update, and delete campgrounds.
* Review System: Users can leave reviews and ratings for campgrounds.
* Image Upload: Users can upload images of campgrounds.
* Responsive Design: Somewhat Mobile-friendly UI.
* Flash Messages: Informative alerts for user actions (e.g., login success, errors).

## Demo

Check out the live demo <a href="https://campshare-5cpt.onrender.com">here</a>.

Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/yelp-camp.git
cd yelp-camp
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

makefile
Copy code
DATABASE_URL=<your-mongo-db-connection-string>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_KEY=<your-cloudinary-key>
CLOUDINARY_SECRET=<your-cloudinary-secret>
SECRET=<your-session-secret>
Run the application:

bash
Copy code
npm start
Visit the application:
Open your browser and go to http://localhost:3000.

Usage
Home Page: Browse the list of campgrounds.
Sign Up / Log In: Access user-specific features by signing up or logging in.
Create Campground: Add new campgrounds with details and images.
View Campground: Click on a campground to view its details and reviews.
Leave a Review: Share your experience by leaving a review and rating.
Edit / Delete: Edit or delete your campgrounds and reviews.
Technologies Used
Front-end:

HTML
CSS
JavaScript
Bootstrap
Back-end:

Node.js
Express.js
Database:

MongoDB
Mongoose
Authentication:

Passport.js
Image Upload:

Cloudinary
Other:

EJS (Embedded JavaScript templates)
Express-Session
Connect-Flash
Project Structure
bash
Copy code
yelp-camp/
│
├── app.js
├── package.json
├── public/
│   ├── scripts/
│   ├── stylesheets/
│   └── images/
├── routes/
│   ├── campgrounds.js
│   ├── reviews.js
│   ├── index.js
├── models/
│   ├── campground.js
│   ├── review.js
│   ├── user.js
├── views/
│   ├── campgrounds/
│   ├── partials/
│   ├── reviews/
│   └── users/
├── .env
└── README.md
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements, bug fixes, or new features.

Fork the repository.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -am 'Add your feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
Created by Your Name - feel free to contact me!