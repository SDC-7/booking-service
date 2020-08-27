# LAirbnb Booking Module
> This module powers the booking interface of a vacation rental website.

## Related Projects
  - https://github.com/SDC-7/carousel-service
  - https://github.com/SDC-7/reviews-service
  - https://github.com/SDC-7/moreplacestostay-service

## Table of Contents
1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [API](#API)

## Usage
> Example URL: http://localhost:3002/3/

To initialize the page, in two separate terminal windows:

```sh
npm start
npm run build
```
![Alt ](/screenshots/LAirbnb_booking.png?raw=true "Booking interface")

## Requirements
- Node v12.18.1
  - https://nodejs.org/
- MySQL v5.7.31
  - https://dev.mysql.com/

## Development

### Installing Dependencies
From within this repository's root directory:
```sh
npm install
```

## API

Use the following CRUD API routes for all requests to the server:

POST /api/booking/
A POST request to /api/booking/ will create a new listing to the database. The request body needs to include the following properties with corresponding values:
- ownerName: string
- rating: float
- numRatings: integer
- pricePerNight: integer
- discountAmount: integer

![Alt ](/screenshots/POST.png?raw=true "POST /api/booking/")

GET /api/booking/:id
A GET request to /api/booking/:id will retrieve an object containing information on the current listing.
![Alt ](/screenshots/GET.png?raw=true "GET /api/booking/:id")

PUT /api/booking/:id
A PUT request to /api/booking/:id will update the existing listing record associated to that id. The request body needs to include the same properties required for the POST request.
![Alt ](/screenshots/UPDATE.png?raw=true "UPDATE /api/booking/:id")

DELETE /api/booking/:id
A DELETE request to /api/booking/:id will delete the existing listing record associated to that id.