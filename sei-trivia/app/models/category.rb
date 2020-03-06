class Category < ApplicationRecord
    belongs_to :unit
    has_many :questions
end
