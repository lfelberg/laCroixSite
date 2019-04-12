Rails.application.routes.draw do
  get 'api/invitations', controller: 'invitations', action: 'index'
  post 'api/invitations', controller: 'invitations', action: 'create'
end
