# ChickTech Chicago - "APIs with JavaScript" Workshop

## API Options

---

### NASA Astronomy Photo of the Day (APOD) API
##### API Endpoint
GET https://api.nasa.gov/planetary/apod
##### API Parameters
Parameter | Sample Value | Optional
--- | --- | ---
api_key | B8UNxTRKr7FDWLcVDCYgJTpbr1Lpg6FnkpqGT2qE | required
date | 2018-11-10 | optional
hd | False | optional
#### API Documentation
https://api.nasa.gov/api.html#apod

---

### Chicago Police Major Crimes API
##### API Endpoint
GET https://api1.chicagopolice.org/clearpath/api/1.0/crimes/major
##### API Parameters
Parameter | Sample Value | Optional
--- | --- | ---
block | dearborn | optional
#### API Documentation
https://api1.chicagopolice.org/clearpath/documentation

---

### Pet Finder API
##### API Endpoint
GET http://api.petfinder.com/pet.find
##### API Parameters
Parameter | Sample Value | Optional
--- | --- | ---
format | json | required
key | b1773aef3c7bb7e15eb73e500fb5919c | required
animal | bird | required
location | 60657 | required
#### API Documentation
https://www.petfinder.com/developers/api-docs

---

### OpenWeatherMap Current Weather API
##### API Endpoint
GET http://api.openweathermap.org/data/2.5/weather
##### API Parameters
Parameter | Sample Value | Optional
--- | --- | ---
APPID | c0c966e3d6e9a47ddd43c08b7635b8d1 | required
q | Chicago,US | required
#### API Documentation
https://openweathermap.org/current

---

### CTA Bus Tracker API
##### API Endpoint
GET http://www.ctabustracker.com/bustime/api/v2/getvehicles?key=NJN9gei9v5tKH7xgXWmuicL2w&format=json&rt=151
##### API Parameters
Parameter | Sample Value | Optional
--- | --- | ---
key | NJN9gei9v5tKH7xgXWmuicL2w | required
rt | 151 | required
format | json | optional
#### API Documentation
https://www.transitchicago.com/assets/1/6/cta_Bus_Tracker_API_Developer_Guide_and_Documentation_20160929.pdf

---

### Campbell's Soup Recipe API
##### API Endpoint
GET https://services.campbells.com/api/Recipes//externalproduct
##### API Parameters
Parameter | Sample Value | Optional
--- | --- | ---
limit | 10 | optional
#### API Headers
Header | Sample Value | Optional
--- | --- | ---
api-key | 89fab34e97859549c86e30067d2d75d8 | required
#### API Documentation
https://developer.campbellskitchen.com/documentation/recipe_interactive

---
