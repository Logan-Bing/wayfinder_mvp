

Domain.destroy_all

#Create 20 job
20.times do
  Domain.create(
    name: Faker::Job.title,
    description: Faker::Job.field
  )
end
