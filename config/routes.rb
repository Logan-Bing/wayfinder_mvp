Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }

  namespace :api do
    namespace :v1 do
      post "/mapping", to: "mapping#match"
    end
  end
end
