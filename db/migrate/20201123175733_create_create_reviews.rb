class CreateCreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :create_reviews do |t|

      t.timestamps
    end
  end
end
