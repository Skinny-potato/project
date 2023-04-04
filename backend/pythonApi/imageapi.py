# import requests

# Api = 'ZYMD9c0g7Hwk2uJ7lWSkAOjV4SHLlfzd'

# url = 'https://app.nanonets.com/api/v2/OCR/Model/25c077d9-2fb2-4b02-a639-1305fc2e6bb5/LabelFile/?async=false'

# headers = {
#     'accept': 'application/x-www-form-urlencoded'
# }

# data = {'urls' : ['https://www.writersdigest.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1024/MTcxMDY4NzY3NTIzMzE3NzQ1/image-placeholder-title.webp']}

# response_API = requests.request('POST', url, headers=headers, auth=requests.auth.HTTPBasicAuth(Api, ''), data=data)

# print(response_API.status_code) 
# #gives you the response of the status

# response_json = response_API.json()

# print(response_json)

# # response_json_data = response_json['result']

# # print(response_json["result"][0]["prediction"][0]["ocr_text"])

import requests
import sys
# theInput=sys.argv[1]

# print(theInput)
Api = 'ZYMD9c0g7Hwk2uJ7lWSkAOjV4SHLlfzd'

headers = {
    'accept': 'application/x-www-form-urlencoded'
}

data = {'file': open("backend/pics/testpic.jpg", 'rb')}

response = requests.request('POST', url, headers=headers, auth=requests.auth.HTTPBasicAuth('ZYMD9c0g7Hwk2uJ7lWSkAOjV4SHLlfzd', ''), data=data)

# print(response_API.status_code) 
#gives you the response of the status

response_json = response_API.json()
print(response_json)
# response_json_data = response_json['result']

# print(response_json["result"][0]["prediction"][0]["ocr_text"])  

