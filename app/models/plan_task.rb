class PlanTask < ApplicationRecord
  belongs_to :domain_task
  belongs_to :plan
end
