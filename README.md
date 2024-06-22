# Yelp Camp

Welcome to **Yelp Camp**, a full-stack web application where users can share and review campgrounds. This project is a part of Colt Steele's Courses.


## Features

- **User Authentication:** Users can sign up, log in, and log out.
- **Authorization:** Users can only edit or delete their own campgrounds and reviews.
- **Campground CRUD:** Users can create, view, update, and delete campgrounds.
- **Review System:** Users can leave reviews and ratings for campgrounds.
- **Image Upload:** Users can upload images of campgrounds.
- **Responsive Design:** Somewhat mobile-friendly UI.
- **Flash Messages:** Informative alerts for user actions (e.g., login success, errors).


## Demo

Check out the live demo [here](https://campshare-5cpt.onrender.com).


## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/debojitdaschowdhury/Yelp-Camp.git
    cd Yelp-Camp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```
    DB_URL=<your-mongo-db-connection-string>
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    MAPBOX_TOKEN=<your-mapbox-token>
    OAUTH_CLIENTID=<your-oauth-client-id>
    OAUTH_CLIENT_SECRET=<your-oauth-client-secret>
    OAUTH_REFRESH_TOKEN=<your-oauth-refresh-token>
    CLOUDINARY_KEY=<your-cloudinary-key>
    CLOUDINARY_SECRET=<your-cloudinary-secret>
    MAIL_USERNAME=<your-email>
    MAIL_PASSWORD=<your-email-password>
    SECRET=<your-session-secret>
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Visit the application:**
    Open your browser and go to `http://localhost:3000`.


## Usage

1. **Home Page:** Landing Page.
2. **Campgrounds Page:** Browse the list of campgrounds.
3. **Register / Login:** Access user-specific features by signing up or logging in.
4. **Create Campground:** Add new campgrounds with details and images.
5. **View Campground:** Click on a campground to view its details and reviews.
6. **Leave a Review:** Share your experience by leaving a review and rating.
7. **Edit / Delete:** Edit or delete your campgrounds and reviews.


## Technologies Used

- **Front-end:**
  - HTML
  - CSS
  - JavaScript
  - JQuery
  - Bootstrap

- **Back-end:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

- **Authentication:**
  - Passport.js

- **Image Upload:**
  - Cloudinary

- **Other:**
  - EJS
  - Express-Session
  - Connect-Flash


## Contributing

Yes, you can fork this repository and submit a `pull` request for any improvements, bug fixes, or new features.