class AddRealTasksToDomains < ActiveRecord::Migration[7.1]
  def change
    add_column :domains, :real_tasks, :text
  end
end
