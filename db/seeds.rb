# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Sam Gubernikoff",
username: "sammyboy",
password_digest: "theanswer3",
favorite_player: "Jose Reyes",
fun_fact: "Can jinx any Mets win at any moment")
User.create( name: "Alexander Gubernikoff",
username: "ajg723",
password_digest: "gubbs723",
favorite_player: "Jacob Degrom",
fun_fact: "100% chance of win when not watching Mets games")
User.create(name: "Dan Gold",
username: "dangold",
password_digest: "dangold",
favorite_player: "Cliff Floyd",
fun_fact: "Loves soup. Hates west coast baseballs games.")
User.create(name: "Brandon Friedman",
username: "brando",
password_digest: "brandon",
favorite_player: "David Wright",
fun_fact: "Despite years of attrocity, still puts Mets ahead of Spurs in fandom")
User.create(name: "Jordan Fishbach",
username: "fishbach",
password_digest: "jordan",
favorite_player: "Mike Piazza",
fun_fact: "Keeping his eye on childhood bestie, Jared Faust, in hopes of one day owning the team.")
User.create(name: "Jared Fried",
username: "jared",
password_digest: "friedo11",
favorite_player: "Johan Santana",
fun_fact: "Wears a youth medium David Wright jersey to every game he attends")
User.create(name: "Josh Herman",
username: "josh",
password_digest: "herman",
favorite_player: "Pedro Martinez",
fun_fact: "Newly added LGBTQ+ Mets chat member, but recognized Met-lifer.")
