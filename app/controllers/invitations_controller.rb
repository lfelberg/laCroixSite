class InvitationsController < ApplicationController
  def index
    puts invitations_list.to_json
    render json: { invitations: invitations_list.to_json }
  end

  def create
    invitation = params[:invitation]
    invite = Invitation.create(email: invitation[:email])
    render json: { invitation: invite.to_json }
  end

  private

  def invitations_list
    @invitations_list = Invitation.order(:id)
  end
end
