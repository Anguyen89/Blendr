class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def create
    @picture = Picture.new(picture_params)
    # @picture.user_id = current_user.id

    if @picture.save
      render :show
    else
      @errors = @picture.errors.full_messages
      render "api/shared/error", status: 422
    end

  end

  def show
    @picture = Picture.find(params[:id])
  end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
    render :show
  end

  private
  def picture_params
    params.require(:picture).permit(:url, :user_id)
  end

  # def count
  #   params[:count] ? params[:count].to_i : 1
  # end
end
