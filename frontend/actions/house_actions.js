import * as APIUtil from '../util/house_api_util';

export const RECEIVE_HOUSES = 'RECEIVE_HOUSES';
export const RECEIVE_HOUSE = 'RECEIVE_HOUSE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_RENTAL_INFO = 'RECEIVE_RENTAL_INFO';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_HOUSE_ERRORS';
export const RECEIVE_RENTAL_ERRORS = 'RECEIVE_RENTAL_ERRORS';

const receiveHouses = houses => ({
    type: RECEIVE_HOUSES,
    houses
});

const receiveHouse = ({ house, reviews, authors, rentals, renters }) => ({
    type: RECEIVE_HOUSE,
    house,
    reviews,
    authors,
    rentals,
    renters,
});

const receiveReview = ({ review, average_score, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_score,
    author,
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

const receiveRentalErrors = errors => ({
    type: RECEIVE_RENTAL_ERRORS,
    errors
})

const receiveRental = rental => ({
    type: RECEIVE_RENTAL_INFO,
    rental
})

const range = (payload, bound) => {
    const location = payload.results[0].geometry.location;
    const latchange = bound / 69;
    const lngchange = bound / 60;
    const east = location.lng + lngchange;
    const south = location.lat - latchange;
    const west = location.lng - lngchange;
    const north = location.lat + latchange;
    return {
        // type: 'RANGE',
        east: east,
        south: south,
        west: west,
        north: north
    }
}

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
        .then(
            review => dispatch(receiveReview(review)),
            error => dispatch(receiveReviewErrors(error.responseJSON))
            )
);

export const fetchHouses = data => dispatch => {
    return APIUtil.fetchHouses(data)
            .then(houses => dispatch(receiveHouses(houses)))
}


// (
//     APIUtil.fetchHouses(data)
//         .then(houses => dispatch(receiveHouses(houses)))
// )

export const fetchHouse = id => dispatch => (
    APIUtil.fetchHouse(id)
        .then(payload => dispatch(receiveHouse(payload)))
)

export const fetchLocationInBound = (location, bound) => dispatch => {
    return APIUtil.fetchLocation(location)
        .then(payload => dispatch(fetchHouses(range(payload, bound))))
}

// export const fetchRental = rental => dispatch => (
//     APIUtil.createRental(rental)
//         .then(rental => dispatch(receiveRental(rental)))
// )

export const createRental = rental => dispatch => (
    APIUtil.createRental(rental)
        .then(
            rental => dispatch(receiveRental(rental))
            // error => dispatch(receiveRentalErrors(error.responseJSON))
            )
);