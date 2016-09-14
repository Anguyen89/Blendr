Rails.application.routes.draw do
  root to: 'static_pages#root'

  # get :register, to: 'static_pages#register'

  resources :users, defaults: {format: :json}, only: [:index, :show, :update]

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :relationships, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:destroy]
    resources :pictures, only: [:index, :create, :destroy, :show] do
      resources :comments, only: [:create, :destroy]
      resources :likes, only: [:create, :destroy]
    end
  end
end
