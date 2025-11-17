#include <iostream>
using namespace std;

int main(){
	int age = 12;
	
	if (age >= 18){
		cout<<"adult";
	}else if(age >= 13){
		cout<<"teenage";
	}
	else{
		cout<<"child";
	}
	
	return 0;
}