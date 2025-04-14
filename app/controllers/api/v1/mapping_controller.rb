class Api::V1::MappingController < ApplicationController

  def match
    answers = params[:user_answers]
    render :json => answers
  end
end
