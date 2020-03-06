# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create( user_name: '', password_digest: '', cohort_id: 0, profile_img_url: '', first_name: '', last_name: '', role: '', access: '' )

cohort = Cohort.create( name: "Blizzard" )
unit =Unit.create( cohort_id: cohort.id, name: "unit 1", display: true )
category = Category.create( unit_id: unit.id, name: "HTML" )
Question.create(
    category_id: category.id,
    prompt: "Which tag creates a paragraph element?",
    ans_1: "<para></para>",
    ans_2: "<p></p>",
    ans_3: "<text></text>",
    ans_4: "<span></span>",
    correct_ans: 2
 )
