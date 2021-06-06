export const fetchHouses = data => (
    $.ajax({
      method: 'GET',
      url: 'api/houses',
      data
    })
  );
  
  export const fetchHouse = id => (
    $.ajax({
      method: 'GET',
      url: `api/houses/${id}`
    })
  );
  
  export const createReview = review => (
    $.ajax({
      method: 'POST',
      url: 'api/reviews',
      data: { review }
    })
  );