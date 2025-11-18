#include <iostream>
using namespace std;

int main(){
	int numbers[7];
	int even[7];
	int odd[7];
	
	for(int i=0 ;i<7 ; i++ ){
		cout<<"enter number: ";
		cin>>numbers[i];
	}
	for(int i=0 ; i<5 ;i++){
        if(numbers[i]%2 == 0){
        	cout<<even[i];
		}else{
			cout<<odd[i];
		}
	};

}