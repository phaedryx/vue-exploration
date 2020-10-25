class CreateWidgets < ActiveRecord::Migration[6.0]
  def change
    create_table :widgets do |t|
      t.string :sku
      t.string :color
      t.string :shape

      t.timestamps
    end
  end
end
