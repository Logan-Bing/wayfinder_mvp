class DomainTask < ApplicationRecord
  belongs_to :Domain
  has_many :plan_tasks
end
