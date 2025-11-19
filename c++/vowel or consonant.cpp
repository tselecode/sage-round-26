#include <iostream>
using namespace std;

string letter(char x  ){

    if(x == 'a' || x== 'e' ||x== 'i' ||x== 'o' ||x== 'u'){
    	return "vowel";
	}else{
		return "consonant";
	}
	
}

int main(){
   char x ; 
  string vowel , consonant ;
   cout<<"enter letter: ";
   cin>>x;	
	cout<<letter( x  );
}