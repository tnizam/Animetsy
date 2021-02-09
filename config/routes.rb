Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]  # show page?
      resource :session, only: [:create, :destroy, :show]
      resources :products, only: [:index, :show] do #:update, :delete, :create --- for seller !
        resources :reviews, only: [:create, :index, :show, :destroy, :update]
      end
      resources :cart_items, only: [:index, :create, :show, :destroy, :update] do
        delete "clear", on: :collection
      end
      
    end
    root "static_pages#root"
end

