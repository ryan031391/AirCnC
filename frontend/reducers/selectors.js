export const selectHouse = ({ houses }, houseId) => {
    return houses[houseId] || { reviewIds: [] };
  };
  
  export const selectReviewsForHouse = ({ houses, reviews }, house) => {
    return house.reviewIds.map(reviewId => reviews[reviewId]);
  };
  export const selectHouses = ({houses}) => (
    Object.keys(houses).map(key => houses[key])
    // Object.values(state.houses)
  );