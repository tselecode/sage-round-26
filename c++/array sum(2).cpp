#include <iostream>
using namespace std;

int main(){
int num1[3] = {23 , 34 , 5};
int num2[3] = {5 , 34 , 1};
int num3[3] = {5 , 78 , 9};
int sum = 0 ;
int sum2 = 0 ;
int sum3= 0 ;

for(int i = 0 ; i<3 ; i++){
	sum += num1[i];
}
for(int i = 0 ; i<3 ; i++){
	sum2 += num2[i];
}
for(int i = 0 ; i<3 ; i++){
	sum3 +=  num3[i];
}
cout<<sum<<endl;
cout<<sum2<<endl;
cout<<sum3<<endl;

}