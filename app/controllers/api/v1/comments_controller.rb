module Api
  module V1
    class CommentsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
      end

      def destroy
      end

      private

      def blog
        @blog ||= Blog.find(params[:blog_id])
      end

      def comment_params
        params.require(:comment).permit(:body, :blog_id)
      end

    end
  end
end
