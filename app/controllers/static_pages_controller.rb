class StaticPagesController < ApplicationController

  def root
    if current_user
      render :root
    else
      redirect_to :register
    end
  end

  def register
    unless current_user
      render :register
    else
      redirect_to :root
    end
  end
end
