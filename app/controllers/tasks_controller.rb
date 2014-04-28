class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

private
  def task_params
    params.fetch(:task).permit(:name, :done, :list_id)
  end
end
