class CreateDomainTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :domain_tasks do |t|
      t.references :domain, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
