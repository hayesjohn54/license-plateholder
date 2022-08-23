class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :plate
      t.string :state
      t.string :image

      t.timestamps
    end
  end
end
