class Plan < ApplicationRecord
  belongs_to :User
  belongs_to :Domain
end
