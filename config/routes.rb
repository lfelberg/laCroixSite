Rails.application.routes.draw do
  get 'api/invitations', controller: 'invitations', action: 'index'
  post 'api/invitations', controller: 'invitations', action: 'create'

  get 'api/laCroixes', controller: 'la_croixes', action: 'index'
  post 'api/laCroixes', controller: 'la_croixes', action: 'create'

  get 'api/laCroixFlavors', controller: 'la_croix_flavors', action: 'index'
  post 'api/laCroixFlavors', controller: 'la_croix_flavors', action: 'create'
end
