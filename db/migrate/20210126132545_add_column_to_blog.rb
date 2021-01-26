class AddColumnToBlog < ActiveRecord::Migration[6.0]
  def change
    add_column :blogs, :slug, :string
  end
end
