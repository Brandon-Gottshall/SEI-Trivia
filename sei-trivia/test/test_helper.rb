ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  def auth_headers(user = users(:one))
    token = JWT.encode(
      { user_id: user.id, username: user.username, exp: 24.hours.from_now.to_i },
      Rails.application.secret_key_base.to_s
    )

    { 'Authorization' => "Bearer #{token}" }
  end
end
