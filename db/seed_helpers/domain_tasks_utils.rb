# db/seed_helpers/domain_tasks_utils.rb
def add_domain_tasks(domain_name, tasks)
  domain = Domain.find_by!(name: domain_name)
  puts "✍️ Domaine trouvé : #{domain.id} - #{domain.name}"

  tasks.each do |task|
    domain.domain_tasks.create!(
      name: task[:name],
      objective: task[:objective],
      description: task[:description]
    )
  end

  puts "✅ DomainTasks complètes ajoutées pour #{domain.name}"
  puts "📌 Total : #{domain.domain_tasks.count} tâches"
end
