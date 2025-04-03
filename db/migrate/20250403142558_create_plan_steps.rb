class CreatePlanSteps < ActiveRecord::Migration[7.1]
  def change
    create_table :plan_steps do |t|
      t.references :plan, null: false, foreign_key: true
      t.string :content
      t.boolean :completed

      t.timestamps
    end
  end
end
