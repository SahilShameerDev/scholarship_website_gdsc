from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Load the JSON file
def load_scholarships():
    with open("C:/Users/bpran/Desktop/ScholarshipWebsite/scholarship_website_gdsc/app/scholarships/scholarship.json", "r") as file:
        return json.load(file)

# Save the JSON file
def save_scholarships(data):
    with open("C:/Users/bpran/Desktop/ScholarshipWebsite/scholarship_website_gdsc/app/scholarships/scholarship.json", "w") as file:
        json.dump(data, file, indent=4)

@app.route("/scholarships", methods=["GET"])
def get_scholarships():
    return jsonify(load_scholarships())

@app.route("/scholarships", methods=["POST"])
def add_scholarship():
    new_scholarship = request.json
    data = load_scholarships()
    data["scholarships"].append(new_scholarship)
    save_scholarships(data)
    return jsonify(data), 201

if __name__ == "__main__":
    app.run(debug=True)
