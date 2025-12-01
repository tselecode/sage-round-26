#include <iostream>
using namespace std;

int multiply(int x , int y ){
	int result = x * y;
	return result ; 
	
}

int main(){
	int x , y;
	int result;
	cout<<"enter number: ";
	cin>>x;
	cout<<"enter number: ";
	cin>>y;
	
	result=multiply( x ,  y );
	cout<<"equals = "<<result;

}