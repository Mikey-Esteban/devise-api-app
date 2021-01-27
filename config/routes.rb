Rails.application.routes.draw do

  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :blogs, param: :slug, except: [:new]
      resources :comments, only: [ :create, :destroy ]
    end
  end

  # handle routing for React Router components without interfering with Rails Routes
  get '*path', to: 'pages#index', via: :all
end
