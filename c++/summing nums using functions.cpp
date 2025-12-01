#include <iostream>
using namespace std;

int sum(int x , int y ){
	int result = x + y;
	return result ; 
	
}

int main(){
	int x , y;
	int result;
	cout<<"enter number"<<endl;
	cin>>x;
	cout<<"enter number"<<endl;
	cin>>y;
	
	result=sum( x ,  y );
	cout<<"equals = "<<result;

}
