class InvitationsController < ApplicationController
  def index
    data = { invitation: invitations_list }
    render :json => data
  end

  def create
    invite = params[:invitation]
    invitation = Invitation.create(email: invite[:email])
    render :json => { invitation: invitation }
  end

  private

  def invitations_list
    @invitations_list = Invitation.order(:id)
  end
end
