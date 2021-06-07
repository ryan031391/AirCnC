export const fetchHouses = bounds => (
    $.ajax({
      method: 'GET',
      url: 'api/houses',
      data: {bounds}
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

  export const fetchLocation = location => (
    $.ajax({
      method: 'GET',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAUADNSH9nyJqtTLTKdArLj6OhTs918GGg`
    })
  )