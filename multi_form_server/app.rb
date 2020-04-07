require 'sinatra'
require 'sinatra/reloader'

enable :sessions

get '/' do
  'how are you?'
end