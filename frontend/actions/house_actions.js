import * as APIUtil from '../util/house_api_util';

export const RECEIVE_HOUSES = 'RECEIVE_HOUSES';
export const RECEIVE_HOUSE = 'RECEIVE_HOUSE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const RECEIVE_RENTAL_INFO = 'RECEIVE_RENTAL_INFO';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

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

const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
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
            error => dispatch(receiveErrors(error.responseJSON))
            )
);

export const fetchHouses = data => dispatch => {
    // console.log(data);
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
    // console.log(location);
    return APIUtil.fetchLocation(location)
        .then(payload => dispatch(fetchHouses(range(payload, bound))))
}