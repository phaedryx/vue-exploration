class WidgetsController < ApplicationController
  def index
    @widgets = Widget.all
  end

  def show
  end

  def edit
  end

  def update
  end
end
