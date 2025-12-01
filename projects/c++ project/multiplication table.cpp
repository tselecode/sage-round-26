#include <iostream>

using namespace std;

int main() {
    cout << "Complete Multiplication Table (1-10)\n";
    cout << "====================================\n\n";
    
    // Header row
    cout  << "×" << " |";
    for (int i = 1; i <= 10; i++) {
        cout  << i;
    }
    cout << "\n----+";
    for (int i = 1; i <= 10; i++) {
        cout << "----";
    }
    cout << endl;
    
    // Table body
    for (int i = 1; i <= 10; i++) {
        cout  << i << " |";
        for (int j = 1; j <= 10; j++) {
            cout  << i * j;
        }
        cout << endl;
    }
    
    return 0;
}

