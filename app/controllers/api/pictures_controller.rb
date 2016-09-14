class Api::PicturesController < ApplicationController
  def index

    following_ids = current_user.following_ids

    @pictures = Picture.where("user_id IN (?) OR user_id = ?",
            following_ids, current_user.id).limit(count * 3)
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.user_id = current_user.id

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

  end

  private
  def picture_params
    params.require(:picture).permit(:url)
  end

  def count
    params[:count] ? params[:count].to_i : 1
  end
end
