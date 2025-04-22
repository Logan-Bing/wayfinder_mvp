class AddJournalToPlans < ActiveRecord::Migration[7.1]
  def change
    add_column :plans, :journal, :text
  end
end
