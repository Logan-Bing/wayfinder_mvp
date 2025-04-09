class ChangeRealTasksToBeArrayInDomains < ActiveRecord::Migration[7.1]
  def change
    remove_column :domains, :real_tasks
    add_column :domains, :real_tasks, :text, array: true, default: []

    remove_column :domains, :fit_description
    add_column :domains, :fit_description, :text, array: true, default: []
  end
end
