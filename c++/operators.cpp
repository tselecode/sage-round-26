#include <iostream>
using namespace std;

int main(){
	int x=5 , y=3 ;
	int sum = x+y;
	int diff = x-y;
	int prod = x*y;
	double div = x/y;
	int rem = x % y;
    bool result = x>y;
    bool cond = (x>y) && true;
    bool condOr = (x>y) || true;
	cout<<"the sum is "<<sum<<endl;
	cout<<"the diff is "<<diff<<endl;
	cout<<"the prod is "<<prod<<endl;
	cout<<"the div is "<<div<<endl;
	cout<<"the rem is "<<rem<<endl;
	cout<<"the result is "<<result<<endl;
	cout<<"the cond is "<<cond<<endl;
	cout<<"the condOr is "<<condOr<<endl;
}
