#include <iostream>
using namespace std;

int squareNum(int x){
	int result = x * x ;
	return result ;
}

int main(){
  int x;
  
  
  cout<<"enter number: ";
  cin>>x;
  int result=squareNum( x);
  cout<<result; 
}