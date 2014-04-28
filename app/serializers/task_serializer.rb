class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :done, :list_id
end
