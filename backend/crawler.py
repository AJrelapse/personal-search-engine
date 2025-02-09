import requests
from bs4 import BeautifulSoup
from elasticsearch import Elasticsearch

# Load Config
from config import ELASTICSEARCH_URL, INDEX_NAME

# Connect to Elasticsearch
es = Elasticsearch([ELASTICSEARCH_URL])

# Function to crawl a webpage
def crawl(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        title = soup.title.string if soup.title else "No Title"
        text = soup.get_text()

        # Indexing the page in Elasticsearch
        es.index(index=INDEX_NAME, body={"url": url, "title": title, "text": text})
        print(f"✅ Indexed: {url}")

    except Exception as e:
        print(f"⚠️ Error crawling {url}: {e}")

# Example usage
if __name__ == "__main__":
    crawl("https://example.com")
