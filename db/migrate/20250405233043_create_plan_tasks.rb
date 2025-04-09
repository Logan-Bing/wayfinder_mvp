class CreatePlanTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :plan_tasks do |t|
      t.references :domain_task, null: false, foreign_key: true
      t.references :plan, null: false, foreign_key: true
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
