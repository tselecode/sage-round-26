#include <iostream>
using namespace std;

string Num(int x , int y){
	if(x>y){
		return to_string(x);
	}else if(y>x){ 
		return to_string(y);
	}else{
		return "they are equal";
	}
}

int main(){
 int x , y;
 cout<<"enter num: ";
 cin>>x;
 cout<<"enter num: ";
 cin>>y;
 
 cout<<Num(x , y);
}