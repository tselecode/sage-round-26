#include <iostream>
using namespace std;

string letter(char x  ){
      char vowels[5]={'a','e','i','o','u'};
    for(char i=0 ; i<27 ; i++){
    	if( i = vowels[i]){
    	return "vowel";
	}else{
		return "consonant";
	}
	}
	
}

int main(){
   char x ; 
  string vowel , consonant ;
   cout<<"enter letter: ";
   cin>>x;	
	cout<<letter( x  );
}