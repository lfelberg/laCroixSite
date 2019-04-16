class CreateLaCroixes < ActiveRecord::Migration[5.2]
  def change
    create_table :la_croixes do |t|
      t.int :user_id
      t.int :la_croix_flavor_id
      t.text :notes

      t.timestamps
    end
  end
end
