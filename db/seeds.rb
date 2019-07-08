require 'csv'

def read_file(table_object)
  csv_text = File.read(Rails.root.join('db', 'data', table_object[:filename]))
  csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
  csv.each do |row|
    table_object[:create].call(row.to_hash)
  end
end

tables = [
  { filename: 'la_croixes.csv', create: lambda { |hash| LaCroix.create(hash) } },
  { filename: 'la_croix_flavors.csv', create: lambda { |hash| LaCroixFlavor.create(hash) } }
];

tables.each do |table|
  read_file(table)
end
