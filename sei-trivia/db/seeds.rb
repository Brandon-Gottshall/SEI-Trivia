# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create( user_name: '', password_digest: '', cohort_id: 0, profile_img_url: '', first_name: '', last_name: '', role: '', access: '' )

Cohort.create( name: "Blizzard" )
Unit.create( cohort_id: 1, name: "unit 1", display: "true" )
Categories.create( unit_id: 1, name: "HTML" )
Question.create(  )
