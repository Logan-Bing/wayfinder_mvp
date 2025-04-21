class DomainTask < ApplicationRecord
  belongs_to :domain
  has_many :plan_tasks
end
