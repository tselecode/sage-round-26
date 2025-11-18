#include <iostream>
using namespace std;

int main(){
	int numbers[5];
	int sum=0;
	
	for(int i=0 ;i<5 ; i++ ){
		cout<<"enter number: ";
		cin>>numbers[i];
	}
	for(int i=0 ; i<5 ;i++){
        sum = sum + numbers[i];
	};
cout<<"the sum is : "<<sum;
}