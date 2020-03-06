class Category < ApplicationRecord
    belongs_to :cohort
    has_many :questions
end
