class Api::V1::DomainsController < ApplicationController

  def index
    @domains = Domain.all
    render json: @domains
  end
end
