class BlogSerializer
  include JSONAPI::Serializer
  attributes :title, :image_url, :body
end
