module Api
  module V1
    class BlogsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        blog = Blog.all.order(created_at: :desc)
      end

      def show
      end

      def create
      end

      def update
      end

      def destroy
      end

      private

      def blog_params
        params.require(:blog).permit(:title, :image_url, :body)
      end

      def options
        @options ||= { include: %i[comments] }
      end

    end
  end
end
