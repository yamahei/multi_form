
# http://localhost:8000/index.html
ruby -rsinatra -e 'set :environment, :production; set :bind, "0.0.0.0"; set :port, 8000; set :public_folder, "./", get("/"){"Hello world"}'
