#include <iostream>
#include <ctime>

	

int main() {

    srand(time(0));
    
    int score = 0;
    int problems = 10;
    
    std::cout << "=== SIMPLE MATH GAME ===\n\n";
    
    for (int i = 1; i <= problems; i++) {
        int a = rand() % 10 + 5;
        int b = rand() % 10 + 9;
        int c = rand() % 10 + 1;
        int answer = a + b;
        int userAnswer;
        
        std::cout << "Problem " << i << ": " << a << " + " << b << " = ";
        
       
        time_t start = time(0);
        std::cin >> userAnswer;
        time_t end = time(0);
        
        int timeTaken = end - start;
        
        if (timeTaken <= 5 && userAnswer == answer) {
            std::cout << "Correct! (" << timeTaken << " seconds)\n\n";
            score++;
        } else if (timeTaken > 5) {
            std::cout << "Too slow! Took " << timeTaken << " seconds\n\n";
        } else {
            std::cout << "Wrong! Answer: " << answer << "\n\n";
        }
    }
    
    std::cout << "Final score: " << score << "/" << problems << "\n";
    system("pause"); 
    
    return 0;
}
