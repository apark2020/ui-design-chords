from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import json
from copy import deepcopy
import re

app = Flask(__name__)

current_id_records = 10

# Path to your JSON file
file_path = 'static/neighborhood_data.json'

quiz_path = 'static/quiz_data.json'

# Open and read the JSON file
try:
    with open('static/quiz_data.json', 'r') as file:
        quiz_data = json.load(file)
except json.JSONDecodeError as e:
    print(f"Error parsing JSON: {e}")
except FileNotFoundError as e:
    print(f"JSON file not found: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
    
# Open and read the JSON file
try:
    with open('static/question_data.json', 'r') as file:
        question_data = json.load(file)
except json.JSONDecodeError as e:
    print(f"Error parsing JSON: {e}")
except FileNotFoundError as e:
    print(f"JSON file not found: {e}")
except Exception as e:
    print(f"An error occurred: {e}")


    
@app.route('/quiz/<quiz_id>', methods=['GET', 'POST'])
def quiz(quiz_id):
    global quiz_data
    global question_data
    
    question_type_filter = question_data[quiz_id]["type"]
    matching_type_quiz = []  # Ensure this list is initialized correctly

    # Since you want to use matching_type_questions in the template,
    # but only set it to question_data["1"], it implies a single question use case.
    matching_type_questions = question_data[quiz_id]

    for record_id, record in quiz_data.items():
        if question_type_filter == record["type"]:
            matching_type_quiz.append(record)

    return render_template('quiz.html', quiz_data=matching_type_quiz, question_data=matching_type_questions)
    
@app.route('/quiz_summary')
def quiz_summary():
    total_questions = len(quiz_data)
    correct_answers = sum(question['correct'] for question in quiz_data.values())
    
    result_message = f"You got {correct_answers} out of {total_questions} questions correct."
    return render_template('quiz_summary.html', result_message=result_message)
    
@app.route('/update-quiz', methods=['POST'])
def update_quiz():
    updated_records = request.get_json()  # This is expected to be a list of record updates
    if isinstance(updated_records, list):
        for update in updated_records:
            record_id = update['id']  # Assuming each record in the list contains an 'id'
            if record_id in quiz_data:
                quiz_data[record_id].update(update)  # Update the dictionary entry with the new data
        return jsonify({"status": "success", "updated_records": len(updated_records)})
    else:
        return jsonify({"status": "error", "message": "Invalid data format received"}), 400



    
if __name__ == '__main__':
   app.run(debug = True)




