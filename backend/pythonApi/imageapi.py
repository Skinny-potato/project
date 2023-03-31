import requests

Api = 'ZYMD9c0g7Hwk2uJ7lWSkAOjV4SHLlfzd'

url = 'https://app.nanonets.com/api/v2/OCR/Model/25c077d9-2fb2-4b02-a639-1305fc2e6bb5/LabelFile/?async=false'

data = {'file': open("backend/pics/testpic.jpg", 'rb')}

response_API = requests.post(url, auth=requests.auth.HTTPBasicAuth(Api, ''), files=data)

print(response_API.status_code) 
#gives you the response of the status

response_json = response_API.json()

response_json_data = response_json['result']

print(response_json["result"][0]["prediction"][0]["ocr_text"])