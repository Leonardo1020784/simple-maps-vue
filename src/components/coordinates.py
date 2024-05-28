import json
import random

def generate_coordinates(num_coordinates):
    coordinates_list = []
    for i in range(1, num_coordinates + 1):
        coordinate = {
            "name": f"coordinate {i}",
            "latitude": random.uniform(-90, 90),
            "longitude": random.uniform(-180, 180),
            "code": i
        }
        coordinates_list.append(coordinate)
    return coordinates_list

def save_coordinates_to_json(coordinates, filename):
    with open(filename, 'w') as json_file:
        json.dump(coordinates, json_file, indent=4)

if __name__ == "__main__":
    num_coordinates = 10000
    coordinates = generate_coordinates(num_coordinates)
    save_coordinates_to_json(coordinates, 'coordinates.json')
    print(f"{num_coordinates} coordinates have been saved to 'coordinates.json'")
