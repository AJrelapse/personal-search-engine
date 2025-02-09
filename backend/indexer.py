from elasticsearch import Elasticsearch

es = Elasticsearch(
    "http://localhost:9200",  # Ensure you're connecting to the correct port
    headers={"Content-Type": "application/json"}  # Force correct headers
)


INDEX_NAME = "my_search_index"
index_mapping = {
    "mappings": {
        "properties": {
            "url": {"type": "keyword"},
            "title": {"type": "text"},
            "content": {"type": "text"},
        }
    }
}

# Create the index with correct headers
if not es.indices.exists(index=INDEX_NAME):
    es.indices.create(index=INDEX_NAME, body=index_mapping)
