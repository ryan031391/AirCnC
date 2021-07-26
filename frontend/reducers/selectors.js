export const selectHouse = ({ houses }, houseId) => {
    return houses[houseId] || { reviewIds: [], rentalIds: []};
  };
  
export const selectReviewsForHouse = ({ reviews }, house) => {
  return house.reviewIds.map(reviewId => reviews[reviewId])
  //   { 
  //   if (reviews[reviewId] === undefined) {
  //     return 0;
  //   } else {
  //     return reviews[reviewId];
  //   }
  // });
};

export const selectRentalsForHouse = ({ rentals }, house) => {
  return house.rentalIds.map(rentalId => rentals[rentalId]);
};

// export const selectRentersForHouse = ({houses, renters}, house) => {
//   return house.renterIds.map(renterId => renters[renterId]);
// }

export const selectHouses = ({houses}) => (
  Object.keys(houses).map(key => houses[key])
  // Object.values(state.houses)
);

export const selectReservations = ({reservations}) => (
  Object.keys(reservations).map(key => reservations[key])
)