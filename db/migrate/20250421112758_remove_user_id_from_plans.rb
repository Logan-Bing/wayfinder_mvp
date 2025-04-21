class RemoveUserIdFromPlans < ActiveRecord::Migration[7.1]
  def change
    remove_reference :plans, :user, foreign_key: true
  end
end
