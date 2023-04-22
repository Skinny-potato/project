import requests
import sys
import os
from pathlib import Path
from dotenv import load_dotenv
dotenv_path = Path('config/.env')
load_dotenv(dotenv_path=dotenv_path)

theInput=sys.argv[1]

data = {'file': open("backend/UploadedFiles/"+theInput, 'rb')}

response_API = requests.post(os.getenv('url'), auth=requests.auth.HTTPBasicAuth(os.getenv('Api'), ''), files=data)

response_json = response_API.json()

print(response_json["result"][0]["prediction"][0]["ocr_text"])