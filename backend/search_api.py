from flask import Flask, request, jsonify
from elasticsearch import Elasticsearch
from config import ELASTICSEARCH_URL, INDEX_NAME

app = Flask(__name__)
es = Elasticsearch([ELASTICSEARCH_URL])

@app.route("/search", methods=["GET"])
def search():
    query = request.args.get("q", "")
    search_query = {
        "query": {
            "multi_match": {
                "query": query,
                "fields": ["title", "text"]
            }
        }
    }

    results = es.search(index=INDEX_NAME, body=search_query)
    
    clean_results = [
        {
            "title": hit["_source"]["title"],
            "url": hit["_source"]["url"],
            "text": " ".join(hit["_source"]["text"].split())[:300] + "..."  # Trim text & remove newlines
        }
        for hit in results["hits"]["hits"]
    ]

    if not clean_results:
        return jsonify({"message": "No results found"}), 404

    return jsonify(clean_results)




if __name__ == "__main__":
    app.run(debug=True, port=5000)
