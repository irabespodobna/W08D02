require 'test_helper'

class UtilisateurControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get utilisateur_index_url
    assert_response :success
  end

end
