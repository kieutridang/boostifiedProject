Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # API
  namespace :api do
    namespace :auth do
      # Instagramer
      post 'instagramer/instagram'
    end
  end
end
