class CreateUtilisateurs < ActiveRecord::Migration[5.2]
  def change
    create_table :utilisateurs do |t|
      t.string :email
      t.text :object

      t.timestamps
    end
  end
end
