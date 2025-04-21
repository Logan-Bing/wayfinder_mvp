class Domain < ApplicationRecord
  has_many :domain_tasks
  has_many :plans
end
