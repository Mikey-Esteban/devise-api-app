module Api
  module V1
    class PrivateController < ApplicationController
      protect_from_forgery with: :null_session

      before_action :authenticate_user!
      def test
        render json: {
          message: "This is a private message for #{current_user.email} you should only see if you've got a correct token"
        }
      end
    end
  end
end
