import * as APIUtil from '../util/house_api_util';

export const RECEIVE_HOUSES = 'RECEIVE_HOUSES';
export const RECEIVE_HOUSE = 'RECEIVE_HOUSE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const RECEIVE_RENTAL_INFO = 'RECEIVE_RENTAL_INFO';

const receiveHouses = houses => ({
    type: RECEIVE_HOUSES,
    houses
});

const receiveHouse = ({ house, reviews, authors }) => ({
    type: RECEIVE_HOUSE,
    house,
    reviews,
    authors,
});

const receiveReview = ({ review, author }) => ({
    type: RECEIVE_REVIEW,
    review,
    author,
});

export const createReview = review => dispatch => (
    APIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const fetchHouses = () => dispatch => (
    APIUtil.fetchHouses()
        .then(houses => dispatch(receiveHouses(houses)))
)

export const fetchHouse = id => dispatch => (
    APIUtil.fetchHouse(id)
        .then(payload => dispatch(receiveHouse(payload)))
)