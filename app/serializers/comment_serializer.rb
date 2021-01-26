class CommentSerializer
  include JSONAPI::Serializer
  attributes :body, :blog_id
end
