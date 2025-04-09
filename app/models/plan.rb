class Plan < ApplicationRecord
  belongs_to :user
  belongs_to :domain
  has_many :plan_tasks
  has_many :journals
end
