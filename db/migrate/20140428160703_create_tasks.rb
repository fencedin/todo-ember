class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :done
      t.string :list_id

      t.timestamps
    end
  end
end
