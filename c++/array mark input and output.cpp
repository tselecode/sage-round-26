#include <iostream>
using namespace std;

int main(){
	int marks[5];
	
	
	for(int i=0 ;i<5 ; i++ ){
		cout<<"enter mark: ";
		cin>>marks[i];
	}
	for(int i=0 ; i<5 ;i++ ){
		cout<<"you entered :"<<marks[i]<<endl;
	}
}