# # Iterate over each pokemon.
# # Use json.set! to explicitly set the key to the pokemon's id.
# # Use json.extract! to grab the pokemon's id, name, and image_url.
#
@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name, :image_url
  end
end
