class Api::V1::DomainsController < ApplicationController
  def show
    domain = Domain.find(params[:id])
    render json: domain
  end
end
