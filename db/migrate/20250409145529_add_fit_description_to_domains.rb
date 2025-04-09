class AddFitDescriptionToDomains < ActiveRecord::Migration[7.1]
  def change
    add_column :domains, :fit_description, :text
  end
end
