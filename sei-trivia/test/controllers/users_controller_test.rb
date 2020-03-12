require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { access: @user.access, cohort_id: @user.cohort_id, first_name: @user.first_name, last_name: @user.last_name, password_digest: @user.password_digest, profile_img_url: @user.profile_img_url, role: @user.role, username: @user.user_name } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { access: @user.access, cohort_id: @user.cohort_id, first_name: @user.first_name, last_name: @user.last_name, password_digest: @user.password_digest, profile_img_url: @user.profile_img_url, role: @user.role, username: @user.username } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
