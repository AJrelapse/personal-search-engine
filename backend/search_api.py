from flask import Flask, request, jsonify
from flask_cors import CORS
import requests  # Using requests instead of Elasticsearch client

app = Flask(__name__)
CORS(app)

# Elasticsearch details
ELASTICSEARCH_URL = "http://localhost:9200"
INDEX_NAME = "searchengine"  # Ensure this index exists

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get("q")
    if not query:
        return jsonify({"error": "Query parameter 'q' is required"}), 400

    search_query = {
        "query": {
            "multi_match": {
                "query": query,
                "fields": ["title", "text"]
            }
        }
    }

    try:
        # Perform search using requests library
        response = requests.get(
            f"{ELASTICSEARCH_URL}/{INDEX_NAME}/_search",
            headers={"Content-Type": "application/json"},
            json=search_query
        )

        # Check for valid response
        if response.status_code != 200:
            return jsonify({"error": response.text}), response.status_code

        # Extract search results
        data = response.json()
        hits = data.get("hits", {}).get("hits", [])
        search_results = [
            {
                "title": hit["_source"].get("title", "No Title"),
                "text": hit["_source"].get("text", "No Text"),
                "url": hit["_source"].get("url", "#")
            } for hit in hits
        ]

        return jsonify(search_results)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/')
def home():
    return "Flask server is running!"

if __name__ == '__main__':
    app.run(debug=True)
