from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from elasticsearch import Elasticsearch

app = Flask(__name__)
CORS(app)  # Enable CORS

es = Elasticsearch("http://localhost:9200")

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get("q")
    if not query:
        return jsonify([])

    search_query = {
        "query": {
            "multi_match": {
                "query": query,
                "fields": ["title", "text"]
            }
        }
    }

    result = es.search(index="searchengine", body=search_query)
    hits = result["hits"]["hits"]

    # Extract relevant fields from search results
    search_results = [{"title": hit["_source"]["title"], "text": hit["_source"]["text"], "url": hit["_source"]["url"]} for hit in hits]

    return jsonify(search_results)

if __name__ == '__main__':
    app.run(debug=True)
