class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    #make sure like belongs to current user (otherwise susceptible to hacks)
    @like.user = current_user

    if @like.save
      render :create
    else
      @errors = @like.errors.full_messages
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      picture_id: params[:picture_id]
    )

    if @like.destroy
      render :show
    else
      @errors = @like.errors.full_messages
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:picture_id, :user_id)
  end
end
