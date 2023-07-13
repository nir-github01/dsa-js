// function prec(c) {

//     debugger;
//     if(c == '^'){
//         return 3;

//     }else if(c == '/' || c == '*'){
//         return 2;
//     }else if(c == '+' || c == '-'){
//         return 1;
//     }else {
//         return -1;
//     }
// }

// function infixToPostfix(s) {
//     debugger;
//  s = "a+b*(c^d-e)^(f+g*h)-i";
//     let st = [];
//     let result = "";
//     debugger;
//     for(let i=0; i< s.length; i++){
//         let c = s[i];

//         if((c >= 'a' && c <= 'z' ) || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
//             result += c;
//         }else if(c == '('){
//             st.push('(');
//         }else if(c == ')'){
//              while(st[st.length - 1] != '('){
//                 result += st[st.length - 1];
//                 st.pop();
//              }   
//              st.pop();       
//         }else{
//             while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1] )){
//                 result += st[st.length - 1];
//                 st.pop();
//             }
//             st.push(c);
//         }
//     }
//     while(st.length != 0){
//         result += st[st.length - 1];
//         st.pop();
//     }
//     document.write(result + "</br>");
//     console.log(result);
// }
// let exp = "a+b*(c^d-e)^(f+g*h)-i";


/**(((((((((((((((((((((((((()))))))))))))))))))))))))) */


/** How to efficiently implement k stacks in a single array? */

function Kstc() {
    debugger
class KStack {
    debugger;
    constructor (k1, n1) 
    {
        this.k = k1;
        this.n = n1;
        this.arr = Array(n).fill(0);
        this.top = Array(k).fill(-1);
        this.next = Array(n).fill(0);

        //Initialize all space as free

        this.free = 0;
        for(var i=0; i< n - 1; i++){
            this.next[i] = i + 1;
        }
        this.next[n - 1] = -1;
    }
    debugger;
    //A utility function to check if there is space available 
    isFull() {
        return (this.free == -1)
    }

    //To push an item in stack number 'sn' where sn is from 0 to k - 1
     push(item, sn)
     {
        //Overflow check 
        if(this.isFull()){
            document.write("Stack is Overflow");
            console.log("Stack is overflow");
            return;
        }

        var i = this.free; //Store index of first free slot

        //Update index of free  slot to index of next slot in free list
        this.next[i] = this.top[sn];
        this.top[sn] = i;

        //Put the item in array
        this.arr[i] = item;
     }
     //To pop an element from stack number 'sn'

     pop(sn){
        if(this.isEmpty(sn)) {
            document.write("Stack Underflow");
            console.log("Stack is usderflow");
            return Number.MAX_VALUE;
        }
        var i = this.top[sn];
        this.top[sn] = this.next[i];

        this.next[i] = this.free;
        this.free = i;

        return this.arr[i];
     }
      isEmpty(sn) 
      {
        return (this.top[sn] == -1);
      }
}

    // Driver program
     
        // Let us create 3 stacks in an array of size 10
        var k = 3;
        n = 10;
 
        var ks = new KStack(k, n);
 
        ks.push(15, 2);
        ks.push(45, 2);
 
        // Let us put some items in stack number 1
        ks.push(17, 1);
        ks.push(49, 1);
        ks.push(39, 1);
 
        // Let us put some items in stack number 0
        ks.push(11, 0);
        ks.push(9, 0);
        ks.push(7, 0);
 
        document.write("Popped element from stack 2 is " + ks.pop(2));
        document.write("<br/>Popped element from stack 1 is " + ks.pop(1));
        document.write("<br/>Popped element from stack 0 is " + ks.pop(0));
 
}