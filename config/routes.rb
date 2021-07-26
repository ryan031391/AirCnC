Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :houses, only: [:index, :show, :create, :update, :delete]
    resources :reviews, only: [:create, :update, :delete]
    resources :rental_infos, only: [:create, :index, :update, :destroy]
    resource :user, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
end
