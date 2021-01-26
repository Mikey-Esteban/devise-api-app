require 'faker'

def grab_image_url
  image_url = Faker::LoremFlickr.image
  image_url
end

def grab_sentence
  sentence = Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 10)
  sentence
end

def grab_paragraph
  paragraph = ''
  rand(1...8).times do
    paragraph += "#{grab_sentence} "
  end
  paragraph
end

def grab_blog
  blog = ''
  rand(2...6).times do
    blog += "#{grab_paragraph}\n"
  end
  blog
end

blogs = Blog.create([
  {
    title: grab_sentence,
    image_url: grab_image_url,
    body: grab_blog
  },
  {
    title: grab_sentence,
    image_url: grab_image_url,
    body: grab_blog
  },
  {
    title: grab_sentence,
    image_url: grab_image_url,
    body: grab_blog
  }
])
