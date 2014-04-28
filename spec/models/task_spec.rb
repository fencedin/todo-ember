require 'spec_helper'

describe Task do
  it { should validate_presence_of :name }

  it 'should allow a user to mark a task as done' do
    task = FactoryGirl.create(:task)
    task.mark_done
    task.done.should eq true
  end
end
