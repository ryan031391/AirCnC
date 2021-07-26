export const fetchHouses = bounds => (
    $.ajax({
      method: 'GET',
      url: 'api/houses',
      data: { bounds }
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
      data: { 
        review 
      }
    })
  );

  export const fetchLocation = location => (
    $.ajax({
      method: 'GET',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAUADNSH9nyJqtTLTKdArLj6OhTs918GGg`
    })
  )

  export const createRental = rental => (
    $.ajax({
      method: 'POST',
      url: 'api/rental_infos',
      data: { 
        rental_info: rental
      }
    })
  )

  export const deleteRental = houseId => (
    $.ajax({
      method: 'DELETE',
      url: `api/rental_infos/${houseId}`,
    })
  )

  export const fetchRental = () => (
    $.ajax({
      method: 'GET',
      url: 'api/rental_infos'
    })
  )

  