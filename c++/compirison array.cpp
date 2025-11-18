#include <iostream>
using namespace std;

int main(){
	int numbers[7];
	int largest=0;
	
	for(int i=0 ;i<7 ; i++ ){
		cout<<"enter number: ";
		cin>>numbers[i];
	}
	for(int i=0 ; i<7 ;i++){
		if (largest<numbers[i]){
			largest=numbers[i];
		}
	}
	cout<<"largest num is: "<<largest;
}