export const selectHouse = ({ houses }, houseId) => {
    return houses[houseId] || { reviewIds: [], rentalIds: [], renterIds: [] };
  };
  
export const selectReviewsForHouse = ({ houses, reviews }, house) => {
  return house.reviewIds.map(reviewId => reviews[reviewId]);
};

export const selectRentalsForHouse = ({ houses, rentals }, house) => {
  return house.rentalIds.map(rentalId => rentals[rentalId]);
};

// export const selectRentersForHouse = ({houses, renters}, house) => {
//   return house.renterIds.map(renterId => renters[renterId]);
// }

export const selectHouses = ({houses}) => (
  Object.keys(houses).map(key => houses[key])
  // Object.values(state.houses)
);