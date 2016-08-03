class Api::PicturesController < ApplicationController
  def index
    # activerecord magic
    # following_ids = current_user.following_ids

    #limit to 3 pictures at a time and order descending so new posts are first
    @pictures = Picture.where("user_id = ?",
            current_user.id).limit(count * 3).order('id desc')
    # @pictures = Picture.where("user_id IN (?) OR user_id = ?",
    #         following_ids, current_user.id).limit(count * 3).order('id desc')
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
    params.require(:picture).permit(:image_url)
  end

  def count
    # for the first render, use a count of 1
    params[:count] ? params[:count].to_i : 1
  end
end
