class LaCroixesController < ApplicationController
  def index
    data = { la_croix: la_croixs_list }
    render :json => data
  end

  def create
    la_croix = params[:laCroix]
    new_la_croix = LaCroix.create(
      user_id: 0,
      la_croix_flavor_id: la_croix[:la_croix_flavor_id],
      notes: la_croix[:notes],
    )
    render :json => { la_croix: new_la_croix }
  end

  private

  def la_croixs_list
    @la_croixs_list = LaCroix.order(:id)
  end
end
