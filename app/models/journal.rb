class Journal < ApplicationRecord
  belongs_to :User
  belongs_to :Plan
end
