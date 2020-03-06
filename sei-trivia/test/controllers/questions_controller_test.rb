require 'test_helper'

class QuestionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @question = questions(:one)
  end

  test "should get index" do
    get questions_url, as: :json
    assert_response :success
  end

  test "should create question" do
    assert_difference('Question.count') do
      post questions_url, params: { question: { ans_1: @question.ans_1, ans_2: @question.ans_2, ans_3: @question.ans_3, ans_4: @question.ans_4, category_id: @question.category_id, correct_ans: @question.correct_ans, prompt: @question.prompt } }, as: :json
    end

    assert_response 201
  end

  test "should show question" do
    get question_url(@question), as: :json
    assert_response :success
  end

  test "should update question" do
    patch question_url(@question), params: { question: { ans_1: @question.ans_1, ans_2: @question.ans_2, ans_3: @question.ans_3, ans_4: @question.ans_4, category_id: @question.category_id, correct_ans: @question.correct_ans, prompt: @question.prompt } }, as: :json
    assert_response 200
  end

  test "should destroy question" do
    assert_difference('Question.count', -1) do
      delete question_url(@question), as: :json
    end

    assert_response 204
  end
end
