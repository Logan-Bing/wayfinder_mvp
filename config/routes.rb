Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }

  namespace :api do
    namespace :v1 do
      post "mapping", to: "mapping#create"
      get "domains/:id", to: "domains#show"
      get "/plans/:id", to: "plans#show"
      post "/plans", to: "plans#create"
    end
  end
end
