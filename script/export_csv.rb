require 'csv'

file_location = "#{Rails.root}/public/"

Rails.application.eager_load!
ApplicationRecord.descendants.each do |table|
  column_headers = table.column_names
  puts file_location + table.name + '.csv'
  # CSV.open(file_location + table.name + '.csv', 'w', write_headers: true, headers: column_headers) do |writer|
    table.all.each do |record|
      # writer << record
      puts record
    end
  # end
end
