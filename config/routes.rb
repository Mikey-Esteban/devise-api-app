Rails.application.routes.draw do

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :blogs, param: :slug, except: [:new]
      resources :comments, only: [ :create, :destroy ]
    end
  end

  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  # handle routing for React Router components without interfering with Rails Routes
  get '*path', to: 'pages#index', via: :all
end
