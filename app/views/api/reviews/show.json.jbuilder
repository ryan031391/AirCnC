json.review do
  json.partial! '/api/reviews/review', review: @review
end

json.author do
  json.partial! '/api/users/user', user: @review.author
end

json.average_score @review.house.average_score