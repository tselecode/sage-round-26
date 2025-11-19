#include <iostream>
using namespace std;

string Num(int x ){
	if(x%2 == 0){
		return "even";
	}else { 
		return "odd";
}
}

int main(){
 int x , y;
 cout<<"enter num: ";
 cin>>x;
 
 cout<<Num(x );
}