#include <iostream>

using namespace std;

int main() {
    cout << " Multiplication Table (1-10)\n";
    cout << "====================================";
    
  
    cout  << "×" << " |";
    for (int i = 1; i <= 10; i++) {
        cout  << i;
    }
    cout << "\n----+";
    for (int i = 1; i <= 10; i++) {
        cout << "   ";
    }
    cout << endl;
    
   
    for (int i = 1; i <= 10; i++) {
        cout  << i << " |";
        for (int j = 1; j <= 10; j++) {
            cout  << i * j;
        }
        cout << endl;
    }
    
    return 0;
}

