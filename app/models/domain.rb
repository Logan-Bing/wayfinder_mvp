class Domain < ApplicationRecord
  has_many :domain_task
  has_many :plans
end
