from flask import Flask, render_template

app = Flask(__name__, static_folder='../src/dist', template_folder='../src')

@app.errorhandler(404)
def page_not_found(e):
  return render_template('html/404.html')

@app.errorhandler(500)
def application_error(e):
  return render_template('html/500.html')

@app.route('/')
def index():
  return render_template('index.html')

if __name__ == '__main__':
  app.run()