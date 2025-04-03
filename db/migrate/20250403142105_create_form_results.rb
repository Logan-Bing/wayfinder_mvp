class CreateFormResults < ActiveRecord::Migration[7.1]
  def change
    create_table :form_results do |t|
      t.references :user, null: false, foreign_key: true
      t.jsonb :answers
      t.jsonb :suggested_domains

      t.timestamps
    end
  end
end
