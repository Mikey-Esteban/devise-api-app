module Api
  module V1
    class BlogsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :authenticate_user!

      def index
        blogs = Blog.all.order(created_at: :desc)

        render json: BlogSerializer.new(blogs, options).serializable_hash.to_json
      end

      def show
        blog = Blog.find_by(slug: params[:slug])

        render json: BlogSerializer.new(blog, options).serializable_hash.to_json
      end

      def create
        blog = Blog.new(blog_params)

        if blog.save
          render json: BlogSerializer.new(blog).serializable_hash.to_json
        else
          render json: { error: blog.errors.messages }, status: 422
        end
      end

      def update
        blog = Blog.find_by(slug: params[:slug])

        if blog.update(blog_params)
          render json: BlogSerializer.new(blog, options).serializable_hash.to_json
        else
          render json: { error: blog.errors.messages }, status: 422
        end
      end

      def destroy
        blog = Blog.find_by(slug: params[:slug])

        if blog.destroy
          head :no_content
        else
          render json: { error: blog.errors.messages }, status: 422
        end
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
