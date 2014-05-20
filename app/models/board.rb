# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class Board < ActiveRecord::Base
  validates :title, presence: true

  has_many :board_assignments, inverse_of: :board
  has_many :cards, through: :lists
  has_many :lists, dependent: :destroy, inverse_of: :board
  has_many :members,
    through: :board_assignments,
    source: :user,
    inverse_of: :boards

  def self.for_member(user)
    joins(:board_assignments).where("board_assignments.user_id = ?", user.id)
  end
  
  # def list_ranks=(board_lists)
    # board_lists.each do |list|
    # l = lists.find(list.id)
    # l.rank = list.rank
    
    # call save
  # end
end
