class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :favorite_player
      t.string :fun_fact
      t.string :username
      t.string :password_digest
      t.timestamps
    end
  end
end
