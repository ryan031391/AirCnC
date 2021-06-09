# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

House.destroy_all;
Review.destroy_all;

h1 = House.create!(
    owner_id: 1,
    location: "333 Post St, San Francisco, CA 94108",
    latitude: 37.7879374,
    longitude: -122.4075147,
    price: 500,
    description: "San Francisco 1"
)

 
h2 = House.create!(
    owner_id: 1,
    location: "187 Pope St, San Francisco, CA 94112",
    latitude: 37.71298815803055,
    longitude: -122.44051655497177,
    price: 510,
    description: "San Francisco 2"
)

h3 = House.create!(
    owner_id: 1,
    location: "97 Jordan Ave, San Francisco, CA 94118",
    latitude: 37.784132150349855, 
    longitude: -122.45701364742105,
    price: 520,
    description: "San Francisco 3"
)

h4 = House.create!(
    owner_id: 1,
    location: "1695 25th Ave, San Francisco, CA 94122",
    latitude: 37.7560508304374, 
    longitude: -122.48327732842135,
    price: 530,
    description: "San Francisco 4"
)

h5 = House.create!(
    owner_id: 1,
    location: "583 Victoria St, San Francisco, CA 94132",
    latitude: 37.72141804584469, 
    longitude: -122.4656957271743,
    price: 540,
    description: "San Francisco 5"
)

h6 = House.create!(
    owner_id: 1,
    location: "424 Clipper St, San Francisco, CA 94114",
    latitude: 37.749030515341815, 
    longitude: -122.43465549591555,
    price: 550,
    description: "San Francisco 6"
)

h7 = House.create!(
    owner_id: 1,
    location: "300 Locust Ave, South San Francisco, CA 94080",
    latitude: 37.65798604415719, 
    longitude: -122.42157767591473,
    price: 560,
    description: "South San Francisco 1"
)

h8 = House.create!(
    owner_id: 1,
    location: "431 E Grand Ave., South San Francisco, CA 94080",
    latitude: 37.651451457882104, 
    longitude: -122.38436983721593,
    price: 570,
    description: "South San Francisco 2"
)

h9 = House.create!(
    owner_id: 1,
    location: "109 Mirada Dr, Daly City, CA 94015",
    latitude: 37.68444729137199, 
    longitude: -122.47557205225577,
    price: 580,
    description: "Daly City 1"
)

h10 = House.create!(
    owner_id: 1,
    location: "641 Southgate Ave, Daly City, CA 94015",
    latitude: 37.69484301866328, 
    longitude: -122.49113150600837,
    price: 590,
    description: "Daly City 2"
)

r1 = Review.create!(
    user_id: 2,
    house_id: h1.id,
    score: 5,
    body: "Perfect!"
)

r2 = Review.create!(
    user_id: 4,
    house_id: h1.id,
    score: 5,
    body: "Perfect!"
)

r3 = Review.create!(
    user_id: 3,
    house_id: h2.id,
    score: 4,
    body: "Really nice experience!"
)

r4 = Review.create!(
    user_id: 2,
    house_id: h2.id,
    score: 5,
    body: "Perfect!"
)

r5 = Review.create!(
    user_id: 4,
    house_id: h2.id,
    score: 4,
    body: "Really nice experience!"
)

r6 = Review.create!(
    user_id: 2,
    house_id: h3.id,
    score: 5,
    body: "Perfect!"
)

r7 = Review.create!(
    user_id: 3,
    house_id: h3.id,
    score: 4,
    body: "Really nice experience!"
)

r8 = Review.create!(
    user_id: 2,
    house_id: h4.id,
    score: 5,
    body: "Perfect!"
)

r9 = Review.create!(
    user_id: 3,
    house_id: h4.id,
    score: 4,
    body: "Really nice experience!"
)

r10 = Review.create!(
    user_id: 2,
    house_id: h5.id,
    score: 5,
    body: "Perfect!"
)

r11 = Review.create!(
    user_id: 3,
    house_id: h5.id,
    score: 4,
    body: "Really nice experience!"
)

r12 = Review.create!(
    user_id: 2,
    house_id: h6.id,
    score: 5,
    body: "Perfect!"
)

r13 = Review.create!(
    user_id: 3,
    house_id: h6.id,
    score: 4,
    body: "Really nice experience!"
)

r1 = RentalInfo.create!(
    user_id: 2,
    house_id: h1.id,
    check_in: "March 15 2021",
    check_out: "March 17 2021",
)

r2 = RentalInfo.create!(
    user_id: 3,
    house_id: h1.id,
    check_in: "April 15 2021",
    check_out: "April 17 2021",
)