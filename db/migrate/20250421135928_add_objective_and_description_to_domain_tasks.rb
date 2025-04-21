class AddObjectiveAndDescriptionToDomainTasks < ActiveRecord::Migration[7.1]
  def change
    add_column :domain_tasks, :objective, :string
    add_column :domain_tasks, :description, :text
  end
end
