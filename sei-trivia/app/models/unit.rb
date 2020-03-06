class Unit < ApplicationRecord
    belongs_to :cohort
    has_many :categories
end
