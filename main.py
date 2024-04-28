import requests
import pandas as pd


# Replace 'YOUR_API_KEY' with your actual Google Maps API key
API_KEY = 'api'

filename = "healthnetdata.csv"
addrsdata = pd.read_csv(filename, usecols=["Provider Name","Address","City","State","Zip","Contact numbers"])
newdata = addrsdata[["Provider Name"]]

for row in addrsdata.itertuples():
    # The address you want to geocode
    #print(row[2])
    if pd.isnull(row[2]):
        print("it's null!")
    else:
        address = str(row[2])+", "+str(row[3]) +" "+ str(row[3])+ ", "+str(row[4]) 
        print(address)
    # '733 West Linden Street, Riverside CA'

        # Construct the Geocoding API URL
        url = f'https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={API_KEY}'
        # Send the request
        response = requests.get(url)

        # Parse the JSON response
        data = response.json()

        # Extract the latitude and longitude
        if data['status'] == 'OK':
            lat = data['results'][0]['geometry']['location']['lat']
            lng = data['results'][0]['geometry']['location']['lng']
            print(f'Latitude: {lat}, Longitude: {lng}')
            # newdata['Latitude'] = {lat}
            # newdata['Longitude'] = {lng}
            newdata = newdata.assign(Address= address, Latitude=lat, Longitude=lng)
        else:
            print('Geocoding failed:', data['status'])

newdata.drop_duplicates(subset=['Provider Name'])
newdata.to_csv("latlongdata.csv", index=False)
