#include <iostream>
#include <cstdlib>
#include <ctime>
#include <chrono>
#include <thread>
#include <string>

using namespace std;
using namespace std::chrono;

class MathQuiz {
private:
    int score;
    int timeLimit; // in seconds
    int problemsSolved;
    
public:
    MathQuiz(int time = 60) : score(0), timeLimit(time), problemsSolved(0) {}
    
    // Generate random math problem
    pair<string, int> generateProblem() {
        int num1 = rand() % 50 + 1;
        int num2 = rand() % 50 + 1;
        int operation = rand() % 4; // 0:+, 1:-, 2:*, 3:/
        
        string problem;
        int answer;
        
        switch(operation) {
            case 0: // Addition
                problem = to_string(num1) + " + " + to_string(num2) + " = ";
                answer = num1 + num2;
                break;
            case 1: // Subtraction
                if (num1 < num2) swap(num1, num2); // Avoid negative answers
                problem = to_string(num1) + " - " + to_string(num2) + " = ";
                answer = num1 - num2;
                break;
            case 2: // Multiplication
                num1 = rand() % 12 + 1;
                num2 = rand() % 12 + 1;
                problem = to_string(num1) + " × " + to_string(num2) + " = ";
                answer = num1 * num2;
                break;
            case 3: // Division
                num2 = rand() % 10 + 1; // Avoid division by zero
                answer = rand() % 10 + 1;
                num1 = num2 * answer; // Ensure integer division
                problem = to_string(num1) + " ÷ " + to_string(num2) + " = ";
                break;
        }
        
        return make_pair(problem, answer);
    }
    
    // Display game header with timer
    void displayHeader(int timeRemaining) {
        system("clear"); // Use "cls" for Windows
        cout << "=== MATH QUIZ GAME ===" << endl;
        cout << "Time Remaining: " << timeRemaining << " seconds" << endl;
        cout << "Score: " << score << " | Problems Solved: " << problemsSolved << endl;
        cout << "----------------------" << endl;
    }
    
    // Start the quiz
    void startQuiz() {
        srand(time(0));
        auto startTime = steady_clock::now();
        auto endTime = startTime + seconds(timeLimit);
        
        cout << "Get ready! The quiz starts in 3 seconds..." << endl;
        for (int i = 3; i > 0; i--) {
            cout << i << "..." << endl;
            this_thread::sleep_for(seconds(1));
        }
        
        while (steady_clock::now() < endTime) {
            // Calculate remaining time
            auto remaining = duration_cast<seconds>(endTime - steady_clock::now());
            int timeRemaining = remaining.count();
            
            if (timeRemaining <= 0) break;
            
            // Generate and display problem
            auto problem = generateProblem();
            displayHeader(timeRemaining);
            
            cout << "Solve: " << problem.first;
            
            int userAnswer;
            cin >> userAnswer;
            
            // Check if time's up during input
            if (steady_clock::now() >= endTime) {
                cout << "Time's up!" << endl;
                break;
            }
            
            // Check answer
            if (userAnswer == problem.second) {
                cout << "? Correct!" << endl;
                score += 10;
                problemsSolved++;
            } else {
                cout << "? Wrong! Answer: " << problem.second << endl;
            }
            
            // Brief pause to see result
            this_thread::sleep_for(milliseconds(1500));
        }
        
        showFinalResults();
    }
    
    // Display final results
    void showFinalResults() {
        system("clear"); // Use "cls" for Windows
        cout << "=== GAME OVER ===" << endl;
        cout << "Time's up!" << endl;
        cout << "----------------------" << endl;
        cout << "FINAL SCORE: " << score << endl;
        cout << "Problems Solved: " << problemsSolved << endl;
        cout << "Accuracy: " << (problemsSolved > 0 ? 
              (score / (problemsSolved * 10.0)) * 100 : 0) << "%" << endl;
        
        // Grading system
        if (score >= 150) cout << "Grade: A+ ?? Excellent!" << endl;
        else if (score >= 120) cout << "Grade: A ?? Great job!" << endl;
        else if (score >= 90) cout << "Grade: B ?? Good work!" << endl;
        else if (score >= 60) cout << "Grade: C ?? Keep practicing!" << endl;
        else cout << "Grade: D ?? Try again!" << endl;
    }
};

// Main menu function
void showMenu() {
    cout << "=== MATH QUIZ GAME ===" << endl;
    cout << "1. Easy Mode (90 seconds)" << endl;
    cout << "2. Normal Mode (60 seconds)" << endl;
    cout << "3. Hard Mode (30 seconds)" << endl;
    cout << "4. Custom Time" << endl;
    cout << "5. Exit" << endl;
    cout << "Choose option (1-5): ";
}

int main() {
    int choice;
    
    do {
        system("clear"); // Use "cls" for Windows
        showMenu();
        cin >> choice;
        
        MathQuiz quiz;
        
        switch(choice) {
            case 1:
                quiz = MathQuiz(90);
                quiz.startQuiz();
                break;
            case 2:
                quiz = MathQuiz(60);
                quiz.startQuiz();
                break;
            case 3:
                quiz = MathQuiz(30);
                quiz.startQuiz();
                break;
            case 4:
                int customTime;
                cout << "Enter time limit in seconds: ";
                cin >> customTime;
                quiz = MathQuiz(customTime);
                quiz.startQuiz();
                break;
            case 5:
                cout << "Thanks for playing!" << endl;
                break;
            default:
                cout << "Invalid option! Press Enter to continue...";
                cin.ignore();
                cin.get();
        }
        
        if (choice != 5) {
            cout << "\nPress Enter to return to menu...";
            cin.ignore();
            cin.get();
        }
        
    } while (choice != 5);
    
    return 0;
}
