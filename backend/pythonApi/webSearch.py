import requests
from bs4 import BeautifulSoup as bs
import warnings
from googlesearch import search

warnings.filterwarnings("ignore", module='bs4')

def searchBing(query, num):
    urls = []
    for url in search(query, num_results=num):
        urls.append(url)
    return urls

def extractText(url):
    page = requests.get(url)
    soup = bs(page.text, 'html.parser')
    return soup.get_text()

    
