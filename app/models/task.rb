class Task < ActiveRecord::Base

  validates :name, presence: true

  def mark_done
    update(done: true)
  end

end
