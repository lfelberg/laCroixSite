class CreateLaCroixFlavors < ActiveRecord::Migration[5.2]
  def change
    create_table :la_croix_flavors do |t|
      t.string :flavor
      t.string :image_url
      t.text :description

      t.timestamps
    end
  end
end
