class Api::V1::PlansController < ApplicationController
  def show
    plan = Plan.find(params[:id])
    render json: plan.as_json(
      include: {
        domain: { only: [:name] },
        plan_tasks: {
          include: {
            domain_task: { only: [:name, :objective , :description] }
          }
        }
      }
    ), status: :ok
  end

  def create
    domain = Domain.find(params[:domain_id])

    plan = Plan.create!(
      domain: domain
    )

    # Associe automatiquement les DomainTasks au Plan sous forme de PlanTasks
    domain.domain_tasks.each do |domain_task|
      PlanTask.create!(
        plan: plan,
        domain_task: domain_task,
        completed: false
      )
    end

    render json: plan.as_json(
      include: {
        domain: { only: [:name] },
        plan_tasks: {
          include: {
            domain_task: { only: [:name, :objective , :description] }
          }
        }
      }
    ), status: :ok
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Domain not found" }, status: :not_found
  rescue ActiveRecord::RecordInvalid => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

end
