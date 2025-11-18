#include <iostream>
using namespace std;

int main(){
	int numbers[3];
	int smallest=0;
	
	for(int i=0 ;i<3 ; i++ ){
		cout<<"enter number: ";
		cin>>numbers[i];
	}
	for(int i=0 ; i<3 ;i++){
		if (smallest>numbers[i]){
			smallest=numbers[i];
		}
	}
	cout<<"smallest num is: "<<smallest;
}