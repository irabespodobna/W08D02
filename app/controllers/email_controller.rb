class EmailController < ApplicationController
  def index


  	loulou = Utilisateur.all 
  	@mails = []
  	loulou.each do |mail|
  		@mails << mail.email 
  		end  

  		@objects = []
  	loulou.each do |mail|
  		@objects << mail.object
  		end  

  end
end


