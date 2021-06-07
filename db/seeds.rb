# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

House.delete_all

h1 = House.create!(
    owner_id: 1,
    latitude: 37.7879374,
    longitude: -122.4075147,
    price: 500,
    description: "union square"
)

h2 = House.create!(
    owner_id: 1,
    latitude: 37.7879375,
    longitude: -122.4075148,
    price: 510,
    description: "union square 2"
)

h3 = House.create!(
    owner_id: 1,
    latitude: 37.7879373,
    longitude: -122.4075146,
    price: 520,
    description: "union square 3"
)

h4 = House.create!(
    owner_id: 1,
    latitude: 37.7879372,
    longitude: -122.4075146,
    price: 530,
    description: "union square 4"
)

h5 = House.create!(
    owner_id: 1,
    latitude: 37.7879376,
    longitude: -122.4075148,
    price: 540,
    description: "union square 5"
)

h6 = House.create!(
    owner_id: 1,
    latitude: 37.7879377,
    longitude: -122.4075147,
    price: 550,
    description: "union square 6"
)

h7 = House.create!(
    owner_id: 1,
    latitude: 37.7879378,
    longitude: -122.4075146,
    price: 560,
    description: "union square 7"
)

h8 = House.create!(
    owner_id: 1,
    latitude: 37.7879372,
    longitude: -122.4075148,
    price: 570,
    description: "union square 8"
)

h9 = House.create!(
    owner_id: 1,
    latitude: 37.7879379,
    longitude: -122.4075142,
    price: 580,
    description: "union square 9"
)

h10 = House.create!(
    owner_id: 1,
    latitude: 37.7879371,
    longitude: -122.4075141,
    price: 590,
    description: "union square 10"
)

h11 = House.create!(
    owner_id: 1,
    latitude: 37.7080712,
    longitude: -122.4363059,
    price: 590,
    description: "Daly City 1"
)

h12 = House.create!(
    owner_id: 1,
    latitude: 37.7080713,
    longitude: -122.4363050,
    price: 590,
    description: "Daly City 2"
)

h13 = House.create!(
    owner_id: 1,
    latitude: 37.7080710,
    longitude: -122.4363054,
    price: 590,
    description: "Daly City 3"
)

h14 = House.create!(
    owner_id: 1,
    latitude: 37.7080722,
    longitude: -122.4363069,
    price: 590,
    description: "Daly City 4"
)

h15 = House.create!(
    owner_id: 1,
    latitude: 37.7080702,
    longitude: -122.4363050,
    price: 590,
    description: "Daly City 5"
)