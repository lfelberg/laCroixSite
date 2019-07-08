class LaCroixFlavorsController < ApplicationController
  def index
    data = { la_croix_flavor: la_croix_flavors_list }
    render :json => data
  end

  def create
    la_croix_flavor = params[:laCroixFlavor]
    la_croix = LaCroixFlavor.create(
      flavor: la_croix_flavor[:flavor],
      image_url: la_croix_flavor[:image_url],
      description: la_croix_flavor[:description],
    )
    render :json => { la_croix_flavor: la_croix }
  end

  private

  def la_croix_flavors_list
    @la_croix_flavors_list = LaCroixFlavor.order(:flavor)
  end
end
